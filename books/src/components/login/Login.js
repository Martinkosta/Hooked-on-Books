import "./Login.css";
import { InputBox } from "../register/InputBox";
import { useState, useEffect } from "react";
import { validateLogin,onSubmitLoginValidation } from "../../utils/formValidation";
import { login } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

export const Login = ({
      setCurrentUser
}) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
 const navigate =useNavigate();
  useEffect(()=>{
      if(Object.keys(formErrors).length===0 && isSubmited===true){
            login(formValues.email,formValues.password)
            .then(res=> {
                  setCurrentUser(res);
                  navigate('/')
            })
        
            .catch(err=>{
                  setFormErrors((state) => ({ ...state, 'email': err.message}));
                  setIsSubmited(false)
            });
          
      }
  },[formErrors,formValues,navigate,isSubmited,setCurrentUser]);

  function onFormChange(e) {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setFormErrors(onSubmitLoginValidation(formValues));
    setIsSubmited(true);
  }

  function onBlurHendler(e) {
    const name = e.target.name;
    const value = validateLogin(name, e.target.value);

    setFormErrors((state) => ({ ...state, [e.target.name]: value }));
  }
  return (
    <div className="container">
      <h2 className="login-title">Login</h2>
      <form className="form" onSubmit={onSubmit}>
        <InputBox
          formValues={formValues}
          formErrors={formErrors}
          onFormChange={onFormChange}
          onBlurHendler={onBlurHendler}
          inputType={"email"}
          type={"email"}
          icon={<i className="fa-solid fa-envelope"></i>}
          placeholder={"Enter your email"}
        />
        <InputBox
          formValues={formValues}
          formErrors={formErrors}
          onFormChange={onFormChange}
          onBlurHendler={onBlurHendler}
          inputType={"password"}
          type={"password"}
          icon={<i className="fa-solid fa-unlock"></i>}
          placeholder={"Enter your password"}
        />

        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
    </div>
  );
};

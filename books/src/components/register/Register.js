import "./Register.css";
import { useEffect, useState } from "react";
import { register} from "../../services/userServices";
import { validate, onSubmitValidation } from "../../utils/formValidation";
import { InputBox } from "./InputBox";
import { useNavigate } from "react-router-dom";
export const Register = ({ setCurrentUser }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    repass: "",
  });
  const navigate=useNavigate()
  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmited) {
            register(formValues).then(res=>{

              setCurrentUser(res);
            });
           navigate('/')
      }
    }, [formErrors, isSubmited,setCurrentUser,formValues,navigate]);

  function onFormChange(e) {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setFormErrors(onSubmitValidation(formValues));
    setIsSubmited(true);
  }

  function onBlurHendler(e) {
    const name = e.target.name;
    let pass;
    if (name === "repass") {
      pass = formValues.password;
    }
    const value = validate(name, e.target.value, pass);
    setFormErrors((state) => ({ ...state, [name]: value }));
  }

  return (
    <div className="container register">
      <h2 className="register-title">Create account</h2>
      <form className="form" onSubmit={onSubmit}>
        <InputBox
          formValues={formValues}
          formErrors={formErrors}
          onFormChange={onFormChange}
          onBlurHendler={onBlurHendler}
          inputType={"username"}
          type={"text"}
          placeholder={'Enter an username'}
          icon={<i className="fa-solid fa-user"></i>}
        />
           <InputBox
          formValues={formValues}
          formErrors={formErrors}
          onFormChange={onFormChange}
          onBlurHendler={onBlurHendler}
          inputType={"email"}
          type={"email"}
          icon={  <i className="fa-solid fa-envelope"></i>}
          placeholder={'Enter an email'}
        />
                 <InputBox
          formValues={formValues}
          formErrors={formErrors}
          onFormChange={onFormChange}
          onBlurHendler={onBlurHendler}
          inputType={"password"}
          type={"password"}
          icon={  <i className="fa-solid fa-unlock"></i>}
          placeholder={'Enter a password'}
        />
                 <InputBox
          formValues={formValues}
          formErrors={formErrors}
          onFormChange={onFormChange}
          onBlurHendler={onBlurHendler}
          inputType={"repass"}
          type={"password"}
          icon={  <i className="fa-solid fa-lock"></i>}
          placeholder={'Enter a maching password'}
        />


        <button type="submit" className="btn">
          Sign up
        </button>
      </form>
    </div>
  );
};

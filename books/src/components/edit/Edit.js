import { useParams,useNavigate} from "react-router-dom"
import { useEffect,useState } from "react"
import { createFormValidtion, onSubmitCreatFormValidation } from '../../utils/createFormValidation'
import {InputBox} from '../register/InputBox'
import { getById, updateBook } from "../../services/bookServices"



export const Edit=()=>{
      const { bookId } = useParams();
      const [formValues,setFormValues]=useState({
            title:'',
            author:'',
            genre:'',
            stars:'',
            image:'',
            description:''
          })
          const [formErrors,setFormErrors]=useState({});
          const [isSubmited,setIsSubmited]=useState(false);
          const navigate=useNavigate()
          useEffect(() => {
            getById(bookId).then((res) => {
              setFormValues({
                  title:res.title,
                  author:res.author,
                  genre:res.genre,
                  stars:res.stars,
                  image:res.image,
                  description:res.description
              })
            });
          }, [bookId]);

          useEffect(()=>{
            if(Object.keys(formErrors).length===0 && isSubmited){
                  setIsSubmited(false);
                  updateBook(bookId,formValues).then(res=>console.log(res))
                  navigate(`/catalog/${bookId}`)
            }else{
              setIsSubmited(false)
            }
          },[isSubmited,formErrors,formValues,navigate,bookId])
      
          function onFormChange(e){
            setFormValues(state=>({...state,[e.target.name]:e.target.value}));
          }
          function onCreatFormSubmition(e){
            e.preventDefault();
            setFormErrors(onSubmitCreatFormValidation(formValues))
            setIsSubmited(true);
          }
      
          function onBlurHendler(e){
            const name=e.target.name;
            const value=createFormValidtion(name,e.target.value);
      
            setFormErrors(state=>({...state, [name]:value}));
      
          }
      
            return (
                  <section className="create-form-container">
                  <form className='create-form' onSubmit={onCreatFormSubmition}>
                      <h3 className='form-title'>Edit Book</h3>
                      <InputBox
                formValues={formValues}
                formErrors={formErrors}
                onFormChange={onFormChange}
                onBlurHendler={onBlurHendler}
                inputType={"title"}
                type={"text"}
                placeholder={'Enter the book title'}
                icon={<i className="fa-solid fa-book"></i>}
              />
                         <InputBox
                formValues={formValues}
                formErrors={formErrors}
                onFormChange={onFormChange}
                onBlurHendler={onBlurHendler}
                inputType={"author"}
                type={"text"}
                placeholder={'Enter the author name'}
                icon={<i className="fa-solid fa-user-pen"></i>}
              />
                         <InputBox
                formValues={formValues}
                formErrors={formErrors}
                onFormChange={onFormChange}
                onBlurHendler={onBlurHendler}
                inputType={"genre"}
                type={"text"}
                placeholder={'Enterthe genre'}
                icon={<i className="fa-solid fa-masks-theater"></i>}
              />
                         <InputBox
                formValues={formValues}
                formErrors={formErrors}
                onFormChange={onFormChange}
                onBlurHendler={onBlurHendler}
                inputType={"stars"}
                type={"number"}
                placeholder={'Rate the book'}
                icon={<i className="fa-solid fa-star"></i>}
              />
                         <InputBox
                formValues={formValues}
                formErrors={formErrors}
                onFormChange={onFormChange}
                onBlurHendler={onBlurHendler}
                inputType={"image"}
                type={"text"}
                placeholder={'Enter an image URL'}
                icon={<i className="fa-regular fa-image"></i>}
              />
                         <InputBox
                formValues={formValues}
                formErrors={formErrors}
                onFormChange={onFormChange}
                onBlurHendler={onBlurHendler}
                inputType={"description"}
                type={"textarea"}
                placeholder={'Enter a description'}
                icon={<i className="fa-solid fa-feather"></i>}
              />
                  
                      <input type="submit" value="Publish" className="btn btn-create"/>
                  </form>
              </section>
            )
}
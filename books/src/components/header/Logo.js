import logo from '../../images/logo.png'
import './Logo.css'
export const Logo=()=>{
      return (
            <div className="logo">
                  <img  className='logo-img'src={logo} alt="" />
                  <p className="logo-text">Hooked On Books</p>
            </div>
      )
}
import './Navigation.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
export const Navigation = () => {

  const { user }=useContext(UserContext);
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><Link to='/catalog'>Catalog</Link></li>

       {!user._id &&  <li className="nav-item"><Link to='/register'>Register</Link></li>}
        {!user._id &&<li className="nav-item"><Link to='/login'>Login</Link></li>}
        {user._id &&<li className="nav-item"><Link to='/create'>Publish a Book</Link></li>}
        {user._id &&<li className="nav-item profile-item"><Link  to='/profile'>{`${user.username}'s`} <span className='profile-text'>profile</span></Link></li>}
        {user._id &&<li className="nav-item"><Link to='/logout'>Log out</Link></li>}      
      </ul>
    </nav>
  );
};

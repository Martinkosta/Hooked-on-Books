import "./Profile.css";
import avatar from "../../images/profile.png";

import { useContext,useEffect,useState } from "react";
import { UserContext } from "../../context/UserContext";
import { getUserBooks } from "../../services/bookServices";
import { ProfileBook } from "./ProfileBook";

export const Profile = () => {
  const { user } = useContext(UserContext);
  const [userBooks,setUserBooks]=useState([]);

useEffect(()=>{
      getUserBooks().then((res)=>{
            setUserBooks(res);
      })
},[])
  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="top-section">
          <i className="message fas fa-envelope"></i>
          <i className="notif fas fa-bell"></i>
          <div className="pic">
            <img src={avatar} alt="profile" />
          </div>
          <div className="email">{user.email}</div>
        </div>

        <div className="bottom-section">
          <div className="social-media">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-link"></i>
          </div>
          <h2>Wishing List</h2>
        </div>
      </div>
      <div className="wish-books">
        {/* <!--If there are wished books--> */}
            {userBooks.map(b=>{
                 return  <ProfileBook key={b._id} {...b}/>
            })}
        {/* <!--If there are no wished books--> */}
      </div>
    </section>
  );
};

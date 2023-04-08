import "./Book.css";
import { useNavigate } from "react-router-dom";

export const Book = ({ title, author, genre, stars, description, image,_id }) => {

  const navigate=useNavigate()

  function onDeatilHedler(){
    navigate(`/catalog/${_id}`);
  }
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="book" className="card-img" />
        </div>
        <div className="flip-card-back" onClick={onDeatilHedler}>
          <p className="title">{title}</p>
          <p>Author: {author}</p>
          <p>Genre: {genre}</p>
         <p className="click-me">Click for more info...</p>
        </div>
      </div>
    </div>
  );
};

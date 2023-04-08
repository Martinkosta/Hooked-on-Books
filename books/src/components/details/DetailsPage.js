import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { deleteBook, getById, likeBook, wishBook } from "../../services/bookServices";
import { useNavigate } from "react-router-dom";

import "./DetailsPage.css";
import { UserContext } from "../../context/UserContext";

export const DetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({
    wishingList:[],
    likes:[]
  });
  const [wished,setIsWished]=useState(false)
  const [liked,setIsLiked]=useState(false)
  const { user } = useContext(UserContext);
  const navigate=useNavigate()

  useEffect(() => {
    getById(bookId).then((res) => {
      setBook(res);
    });
  }, [bookId,wished,liked]);

console.log(book.wishingList.includes(user._id));
  
  function onEditHendler(){
    navigate(`/edit/${bookId}`);
  }
  async function onDeleteHendler(){
     await deleteBook(bookId)
     navigate('/catalog')
  }
async function onWishHadler(){
        await wishBook(bookId);
        setIsWished(true)
}
async function onLikeHandler(){
  await likeBook(bookId);
  setIsLiked(true)
}

  return (
    <div className="details-container">
      <div className="details-img">
        <img src={book.image} alt="Book" />
      </div>

      <div className="details-content">
        <div className="title-wrapper">
          <p className="book-info">{book.title}</p>
        </div>
        <p className="author-lable lable">
          <i className="fa-solid fa-feather"></i> Author:
          <span className="book-info">{book.author}</span>
        </p>

        <p className="genre-lable lable">
          <i className="fa-solid fa-masks-theater"></i> Genre:
          <span className="book-info">{book.genre}</span>
        </p>

        <p className="stars-lable lable">
          <i className="fa-solid fa-star"></i> Stars:
          <span className="book-info">{book.stars}</span>
        </p>

        <p className="description-lable lable">
          <i className="fa-solid fa-book-open"></i> Description:
          <span className="book-info">{book.description}</span>
        </p>
        <p className="description-lable lable">
        <i className="fa-solid fa-thumbs-up"></i> Likes:
          <span className="book-info">{book.likes.length}</span>
        </p>

    {!!user.username ? <>
      {user._id === book.owner ? (
          <div className="owner-btns">
            <button className="btn btn-edit" onClick={onEditHendler}>Edit</button>
            <button className="btn btn-delete" onClick={onDeleteHendler}>Delete</button>
          </div>
        ) : (
          <div className="owner-btns">
           {book.wishingList.includes(user._id) ? <p className="wish-text">Added to the list  <i className="fa-solid fa-face-laugh-beam"></i></p>:   <button className="btn" onClick={onWishHadler}>Add to list</button>}
           {book.likes.includes(user._id) ? <p className="wish-text">Liked <i className="fa-regular fa-thumbs-up"></i></p>:   <button className="btn" onClick={onLikeHandler}>Like</button>}
          </div>
        )}
    </> : null}
      
      </div>
    </div>
  );
};

import "./Home.css";
import book from "../../images/book-home.png";
import { useNavigate } from "react-router-dom";
export const Home = () => {
      const navigate=useNavigate();
      function onClickHendler(){
            navigate('/catalog')
      }
  return (
    <div className="home-wrapper">
      <div className="home-main-container">
        <div className="home-desc">
          <h2 className="home-title">Books</h2>
          <p className="home-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            eaque fugit doloremque praesentium quaerat velit soluta commodi
            minus in dolorum!
          </p>
          <button className="home-btn" onClick={onClickHendler}>Collection</button>
        </div>

        <div className="home-img-container">
          <img src={book} alt="Book" />
        </div>
      </div>
    </div>
  );
};

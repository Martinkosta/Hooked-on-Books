import { Link } from "react-router-dom"

export const ProfileBook=({
      image,
      _id
})=>{

      return (
            <div className="book">
<div className="info-container-profile">
    <img src={image} alt='book'/>
</div>
<div className="details-btn">
    <Link  to={`/catalog/${_id}`} className="btn details-btn">Details</Link>
</div>
</div>
      )

}
import { Book } from "./Book"
import './Catalog.css'
import { useEffect,useState } from "react"
import { getAll } from "../../services/bookServices";
export const Catalog=()=>{
 const [books,setBooks]=useState([]);
 const [booksCount,setBooksCount]=useState(0);
 useEffect(()=>{
      getAll().then(res=>{
            setBooks(res);
            setBooksCount(res.length)
      })
 },[booksCount])

      return (
            <div className="catalog-container">
                 {books.map(b=><Book key={b._id} {...b}/>)}
            </div>
      )
}
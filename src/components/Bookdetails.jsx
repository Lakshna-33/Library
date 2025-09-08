import { Link, useParams } from "react-router-dom"
import { Books } from "../Data/mockData";
import "./style.css"
import "./WelcomePage.css"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addtocart } from "../Data/cartSlice.js";


function Bookdetails() {
    const params = useParams();
    const book = Books.filter(book => book.id == params.id);
    console.log(book);

    
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleAddbook(book) {
    dispatch(addtocart(book));
    alert(`"${book.title}" book added to cart`);
    }


        return (
        <>
        <Header />
            <body className ="main2-body"> 
            <h2 className="bookdetails-h2">{`Book Details for the book with id ${params.id}`}</h2>
            <div className = "category">
            <button className ="categories-button" onClick={() => navigate("/home")}>
                              ⬅ Back to Categories
                                          </button></div>
            <div>
           </div>
            {book.map(book => {
                return (
                    <>
                        <div className="book-main">
  
                            <div className="bookdetail-card">
                            <img src={book.coverImage} alt="" width="200" height="200" className="book-image" />
                            <div className="book-details">
                                <div className="book-header">
                                    <h2 className="book-title">
                                        {book.title} <span className="book-genre">({book.genre})</span>
                                    </h2>
                                </div>
                            </div>
                            <h4 className="book-author">{book.author}</h4>
                            <p className="book-description">{book.description}</p>
                            <p className="book-price">Price - {book.price}</p>
                            <h3 className="book-rating">Rating - {book.rating}</h3>
                            <h4 className="book-year">Year : {book.year}</h4>
                            <h4 className="book-page">Pages : {book.pages}</h4>
                            <h4 className="book-price">Publisher : {book.publisher}</h4>
                            <h4 className="book-price">PublishDate : {book.publishDate}</h4>
                            <h4 className="book-summary">Summary : {book.summary}</h4>
                            <button onClick={()=>handleAddbook(book) }className="categories-button">Add to Cart</button> 
                    
                        </div>
                        </div>
                 </>
                )
            })}  
           </body>
        </>
    )
}    

export default Bookdetails
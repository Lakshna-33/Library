import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { removefromcart, clearcart } from "../Data/cartSlice";
import { Link } from "react-router-dom";
import "./style.css";
import "./WelcomePage.css";

function CartPage() {
  const cartItems = useSelector((state) => state.cart?.items || []); // from store
  const dispatch = useDispatch();

  // Remove single book
  function handleRemoveBook(book) {
    if (!book || book.id == null) return;
    dispatch(removefromcart(book.id));
    alert(`"${book.title}" book removed from cart`);
  }

  // Clear all books
  function handleClearCart() {
    dispatch(clearcart());
  }

  return (
    <body className ="main4-body">
      <div className ="cart-list">
      <h1>🛒 My Cart</h1>

       <div className ="catgeory">
      <Link to="/browsebooks">
          <button className="categories-button">Browse Books</button>
        </Link>
        
      <button className="categories-button" onClick={handleClearCart}>
            Clear Cart
          </button></div>
        
      {cartItems.length === 0 ? (
        <h1>Your cart is empty.</h1>
      ) : (
        <div className="cart-list">
          {cartItems.map((book) => (
            <div key={book.id} className="cart-item">
              <img src={book.coverImage} alt={book.title} width="100%" />
              <div className="cart-info">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>Price: ₹{book.price}</p>
                <button
                  className="search-button"
                  onClick={() => handleRemoveBook(book)}
                >
                  Remove
                </button>
              </div>
            </div>
            
          ))}
        </div> 
      )}
      </div>
    </body>
    
  );
}

export default CartPage;

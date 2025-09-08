import "./Header.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Header() {

    const cartItems = useSelector((store) => store.cart.items);
    console.log("cartItems", cartItems);
    return (

        <div className ="Header">
            <ul>
              
             <Link className ="li" to= "/">
            <li>Welcome</li></Link>      

            <Link className ="li" to="/home">
            <li>Home</li></Link>

            <Link className ="li" to="/browsebooks">
            <li>BrowseBooks</li></Link> 

            <Link className ="li" to= "/cartpage">
            <li>Cart{cartItems.length}</li></Link>
           
          </ul>
        
        </div>
    )
}

export default Header
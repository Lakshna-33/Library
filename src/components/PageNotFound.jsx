import { Link, useLocation } from "react-router-dom";
import "./style.css"; 

function PageNotFound() {
  const location = useLocation(); // gives the current invalid route URL

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page <span style={{ color: "red" }}>{location.pathname}</span> does not exist.
      </p>
      <Link to="/">
        <button className="back-home-btn"> Back to Home</button>
      </Link>
    </div>
  )
}

export default PageNotFound

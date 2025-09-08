import "./WelcomePage.css"
import Header from "./Header" 

function WelcomePage({onCategorySelect}) {

return (
<>  
    <Header/>
    <div className="category">
    <button className="categories-button" onClick={() => onCategorySelect("Fiction")}>Fiction</button>
    <button className="categories-button" onClick={() => onCategorySelect("Non-Fiction")}>Non-Fiction</button>
    </div>
    
    </>
)
}
export default WelcomePage
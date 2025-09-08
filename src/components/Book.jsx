import "./style.css"

function Book(props) {
  return (
    
    <div className="book-card">
      <img src= {props.details.coverImage} alt="" width="200px" height="200px" className="book-image" />
  
        <div className="book-details">
          <div className="book-header">
  <h2 className="book-title">
  {props.details.title} <span className="book-genre">({props.details.genre})</span>
</h2>

        <h4 className="book-author">{props.details.author}</h4>
      </div>
       </div></div>
       
  )
}

export default Book

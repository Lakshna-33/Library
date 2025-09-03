import "./style.css"

function Book(props) {
  return (
    <div className="book-card">
      <img src= {props.details.coverImage} alt="" width="200px" height="200px" className="book-image" 
      />
        <div className="book-details">
        <h1 className="book-title">{props.details.title}</h1>
        <p className="book-genre">{props.details.genre}</p>
        <h4 className="book-author">{props.details.author}</h4>
        <p className="book-description">{props.details.description}</p>
        <p className="book-year">{props.details.year}</p>
      </div>
      </div>
  )
}

export default Book

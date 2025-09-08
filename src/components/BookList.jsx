import Book from "./Book";
import "./style.css";
import { Link } from "react-router-dom";

function BookList(props) {
  return (
    <div className="book-list">
      {props.data.map((data) => (
        <div key={data.id}>
           {/* Normal Book card */}
          {/* <Book details={data} /> */}

          {/* Linked Book card */}
          <Book details ={{...data, title :(
            <Link to={`/book/${data.id}`} className="title-link">
            {data.title}
          </Link>
          )
        }}
        />
        </div>
      ))}
    </div>
  );
}

export default BookList

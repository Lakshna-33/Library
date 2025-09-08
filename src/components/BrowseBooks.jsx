import BookList from './BookList.jsx'
import { Books } from '../Data/mockData'
import "./style.css"
import { useState } from 'react'
import WelcomePage from './WelcomePage';

function BrowseBooks() {
  const [searchText, setText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);
  const [category, setCategory] = useState(null);

  function handleSearch() {
    let filterBooks = Books;

    // filter by category if selected
    if (category) {
      filterBooks = filterBooks.filter((book) => book.genre === category);
    }

    // filter by search text
    if (searchText.trim() !== "") {
      filterBooks = filterBooks.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredBooks(filterBooks);
  }

  // 🔹 Reset category → back to WelcomePage
  function handleBackToCategories() {
    setCategory(null);
    setFilteredBooks(Books);
    setText("");
  }

  // 🔹 When category is chosen (Fiction / Non-Fiction), filter immediately
  function handleCategorySelect(selectedCategory) {
    setCategory(selectedCategory);
    const filteredByCategory = Books.filter(
      (book) => book.genre === selectedCategory
    );
    setFilteredBooks(filteredByCategory);
  }

  return (
    <>
      <body className = "main3-body">
      <div className="search"> 
        <div>
          <input
            type="text"
            className="search-input"
            placeholder= "Search here by book's title..."
            value={searchText}
            onChange={(e) => setText(e.target.value)}
          /> 
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Landing page logic */}
      {!category ? (
        <WelcomePage onCategorySelect={handleCategorySelect} />
      ) : (
        <>

        {/* 🔹 Back to Categories button */}
          <div style={{ textAlign: "center", marginTop: "20px" , marginBottom : "20px"}}>
            <button style={{background : "purple", padding: "10px 10px"}} onClick={handleBackToCategories}>⬅ Back to Categories</button>
          </div>
          
          <h2 style={{ textAlign: "center" }}>{category} Books</h2>
          <BookList data={filteredBooks} />
        </>
      )}
      </body>
    </>
  );
  
}

export default BrowseBooks;

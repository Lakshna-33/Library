import BookList from './components/BookList'
import { Books } from './Data/mockData'
import "./components/style.css"
import { useState } from 'react'


function App() {

  const [searchText, setText] = useState("");
  const [filteredBooks, setfilteredBooks] = useState(Books);

  function handleSearch() {
     const filterBooks = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));

    setfilteredBooks(filterBooks);
  }

  return (
    <>
    <div className="search">
       <h2>Search Books</h2>
       <div>
      <input type = "text" name="" className="search-input" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
     <BookList data={filteredBooks}/>
    </> 
  )
}
export default App

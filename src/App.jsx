import BookList from './components/BookList'
import { Books } from './Data/mockData'
import "./components/style.css"
import { useState } from 'react'
import Header from './components/Header';


function App() {
  
  const [searchText, setText] = useState("");
  const [filteredBooks, setfilteredBooks] = useState(Books);

  function handleSearch() {
     const filterBooks = Books.filter((book) => book.title.toLowerCase().includes(searchText.toLowerCase()));

    setfilteredBooks(filterBooks);

  }
  

  return (
    <>
    <Header />
    <body className = "main-body">
    
     
    <div className="search">
       <h2>Search Books</h2>
       <div>
      <input type = "text" name="" className="search-input" placeholder="Search here by book's title..." onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      </div>
    </div>
     <BookList data={filteredBooks}/>
     </body>
    </> 
  )
}
export default App
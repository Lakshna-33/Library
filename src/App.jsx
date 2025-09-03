import BookList from './components/BookList'
import { Books } from './Data/mockData'
import "./components/style.css"
import { useState } from 'react'


function App() {

  const [searchText, setText] = useState("");

  function handleSearch() {
    
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
     <BookList data={Books}/>
    </> 
  )
}
export default App

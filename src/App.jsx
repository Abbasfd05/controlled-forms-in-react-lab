import { useState } from 'react'
import './App.css'
import BookShelf from './components/Bookshelf/Bookshelf.jsx'
function App() {
  const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);
const [newBook,setNewBook]=useState({
  title:'',
  author:'',
})
function handleInputChange(event) {
  const {name,value}=event.target;
  setNewBook({
    ...newBook,
    [name]:value,
  })

}
function handleSubmit(event) {
event.preventDefault();
setBooks([...books,newBook]); //array state

setNewBook({
  title:'',
  author:'',
})
}

  return (
    <>
      <h1>My BookShelf</h1>
      <BookShelf
      books={books}
      newBook={newBook}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      />
    </>
  )
}

export default App

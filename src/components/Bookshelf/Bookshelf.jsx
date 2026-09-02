const bookshelf = ({
    books,
    newBook,
    handleInputChange,
    handleSubmit,
}) => {
return ( 
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {
    <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={newBook.title} onChange={handleInputChange}></input>
         <label>Author:</label>
         <input type="text" name="author" value={newBook.author} onChange={handleInputChange}></input>
         <br/>
         <div className="button-purple">
            <button type="submit">Add Book</button>
         </div>
         
    </form>
    }
  </div>
  <div className="bookCardsDiv">{
   books.map((book,index) => (
 <div className="bookCard" key={index}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
   ))}
   </div>
</div>
) 
}
export default bookshelf;
import { useState } from "react";

//create the array of books
const arrayBookObject = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
];

//create an object for user inputs
const newBookObject = {
  title: "",
  author: "",
};
export const Bookshelf = () => {
  const [books, setBooks] = useState(arrayBookObject);
  const [newBook, setNewBook] = useState(newBookObject);

  //function to handle user inputs
  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  // function to handle the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="title">Title</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="title"
              id="title"
              value={newBook.title}
            />
          </p>
          <p>
            <label htmlFor="author">Author</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="author"
              id="author"
              value={newBook.author}
            />
          </p>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index}>
            <p>{book.title}</p>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

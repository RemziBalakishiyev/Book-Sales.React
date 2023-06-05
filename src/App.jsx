import { useState } from "react";
import "./App.css";
import AddBook from "./components/Books/AddBook.jsx";
import BookList from "./components/Books/BookList.jsx";
import Head from "./components/Headers/Header";
import { NavigationContext } from "./components/Context/NavigationContext";

function App() {
  const [bookList, setBookList] = useState([]);

  const bookListItemHandler = (bookName, writer) => {
    setBookList((prevState) => {
      return [
        ...prevState,
        {
          bookName: bookName,
          writer: writer,
          id: Math.random().toString() + Math.random().toString(),
        },
      ];
    });
  };

  return (
    <>
      <NavigationContext.Provider value={{ isLogin: false }}>
        <Head />
        <AddBook addBookListItem={bookListItemHandler}></AddBook>
        <BookList books={bookList}></BookList>
      </NavigationContext.Provider>
    </>
  );
}

export default App;

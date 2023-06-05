import "./BookList.css";

const BookList = (props) => {
  console.log(props.books);
  return (
    <ul className="book--list--group">
      {props.books.map((b) => (
        <li key={b.id} className="book--list">
          {b.bookName} | {b.writer}
        </li>
      ))}
    </ul>
  );
};

export default BookList;

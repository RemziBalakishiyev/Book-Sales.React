import { useEffect, useRef, useState } from "react";
import Card from "../UI/Card";
import "./AddBook.css";
import { useReducer } from "react";
import Input from "../UI/Input";
const BookEnum = {
  AB: "ADD_BOOK",
  AW: "ADD_WRITER",
  CHB: "CHECK_BOOK",
  CHW: "CHECK_WRITER",
};
const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, Value: action.val };
    case "CHECK_BOOK":
      return { ...state, IsValid: action.val };
  }
};

const writerReducer = (state, action) => {
  switch (action.type) {
    case BookEnum.AW:
      return { ...state, Value: action.val };
    case BookEnum.CHW:
      return { ...state, IsValid: action.val };
  }
};

const AddBook = (props) => {
  const [formValid, setFormValid] = useState(false);

  const bookNameRef = useRef();

  const bookNameVal = bookNameRef.current ? bookNameRef.current.value : "";

  const [bookNameState, dispacthBookName] = useReducer(bookReducer, {
    Value: "",
    IsValid: false,
  });

  const [writerState, dispatchWriter] = useReducer(writerReducer, {
    Value: "",
    IsValid: false,
  });

  useEffect(() => {
    formValidationHandler();
  }, [bookNameState.Value, writerState.Value]);

  const addBookHandler = (event) => {
    debugger;
    event.preventDefault();
    console.log(bookNameState.Value, writerState.Value);
    if (writerState.IsValid && bookNameState.IsValid) {
      return;
    }
    props.addBookListItem(bookNameState.Value, writerState.Value);
  };

  const onBookNameHandler = (e) => {
    dispacthBookName({ type: "ADD_BOOK", val: bookNameVal });

    if (e.target.value === "") {
      dispacthBookName({ type: "CHECK_BOOK", val: false });
    } else {
      dispacthBookName({ type: "CHECK_BOOK", val: true });
    }
  };

  const onWriterNameHandler = (e) => {
    dispatchWriter({ type: BookEnum.AW, val: e.target.value });
    if (e.target.value === "") {
      dispatchWriter({ type: BookEnum.CHW, val: false });
    } else {
      dispatchWriter({ type: BookEnum.CHW, val: true });
    }
  };

  const formValidationHandler = () => {
    if (
      bookNameState.Value.trim().length !== 0 &&
      writerState.Value.trim().length !== 0
    ) {
      setFormValid(true);
      return;
    }

    setFormValid(false);
  };
  return (
    <Card>
      <form onSubmit={addBookHandler}>
        <Input
          id="bookname"
          value={bookNameState.value}
          style={{ outlineColor: !bookNameState.IsValid ? "red" : "" }}
          onChange={onBookNameHandler}
        />
        <div className="form--group--item">
          <label htmlFor="writer">Writer</label>
          <input
            type="text"
            id="writer"
            value={writerState.Value}
            style={{ outlineColor: !writerState.IsValid ? "red" : "" }}
            onChange={onWriterNameHandler}
          />
        </div>
        <button
          disabled={!formValid}
          style={{ backgroundColor: formValid ? "#e55553" : "#f28482" }}
          type="submit"
        >
          Add Book
        </button>
      </form>
    </Card>
  );
};

export default AddBook;

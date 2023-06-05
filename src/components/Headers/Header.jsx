import { NavigationContext } from "../Context/NavigationContext";
import { useContext } from "react";
import "./Header.css";
function Header() {
  const { isLogin } = useContext(NavigationContext);
  return (
    <nav>
      <div className="logo">Bool Books</div>
      {isLogin ? (
        <ul>
          <li>Add Book</li>
          <li>About</li>
          <li>Book List</li>
        </ul>
      ) : (
        <button className="btn--login">Login</button>
      )}
    </nav>
  );
}

export default Header;

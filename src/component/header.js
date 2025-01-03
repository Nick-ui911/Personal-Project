import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user , setUser } = useContext(UserContext);
  return (
    <div className="header">
      <img
        className="logo"
        alt="logo"
        src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
      />

      <nav className="nav-item">
        <ul>
          <li>
            <Link className="nav-link" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              CART
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/instamart">
              INSTAMART
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/profile">
              PROFILE
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/dineout">
              DINEOUT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/useraddress">
              LOCATION
            </Link>
          </li>
        </ul>
      </nav>
      <h3>{user.name}</h3>
      {/* ...user (spread operator) with the help of this it created copy of user
       object in the state and then changing that object in the state and then
        it is reflected in the component */}
      {/* <input onChange={(e)=>{setUser({...user,name : e.target.value})}}></input>
      <input onChange={(e)=>{setUser({...user,email : e.target.value})}}></input> */}
      <Link className="button lineremove" to="/login">
        <button className="login-button">Login</button>
      </Link>
    </div>
  );
};

export default Header;

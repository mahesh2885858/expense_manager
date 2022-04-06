import { Link } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to={`/`}>Home</Link>
      <Link to={`/addentry`}>Add Entry</Link>
    </div>
  );
};

export default NavBar;

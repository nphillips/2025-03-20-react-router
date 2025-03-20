import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/blue">
        <span>Blue</span>
      </Link>
      <Link to="/red">
        <span>Red</span>
      </Link>
    </div>
  );
};

export default Navbar;

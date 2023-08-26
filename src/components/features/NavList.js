import { Link } from "react-router-dom";

const NavList = ({ menuOpen }) => (
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/jerseys" className="link">
          Jerseys
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  );
    export default NavList
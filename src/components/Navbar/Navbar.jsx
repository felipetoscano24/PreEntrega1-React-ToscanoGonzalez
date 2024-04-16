import "./navbar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-navbar">
        <img className="logo-navbar" src="/img/logo.png" />
      </Link>
      <ul className="lista">
        <Link to="/categoria/caramelo" className="lista">CARAMELOS</Link>
        <Link to="/categoria/chupetin" className="lista">CHUPETINES</Link>
        <Link to="/categoria/bombon" className="lista">BOMBONES</Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;

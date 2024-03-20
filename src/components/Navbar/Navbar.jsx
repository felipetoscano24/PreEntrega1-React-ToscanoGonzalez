import "./navbar.css"
import "./CartWidget"
import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo-navbar" src="/img/logo.png" />
      <ul className="lista">
        <li>Caramelos</li>
        <li>Gomitas</li>
        <li>Chupetines</li>
        <li>Bombones</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar

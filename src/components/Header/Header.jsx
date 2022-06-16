import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./ntd.jpg";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand" rel="./ntd.jpg">
            <img className="logo" src={logo} alt="notToday" />
          </Link>
          <Link to="/" className="navbar-brand text-uppercase">
            Not Today
          </Link>
          <Link to="/News" className="navbar-brand text-uppercase">
            Noticias
          </Link>
          <Link to="/Contact" className="navbar-brand text-uppercase">
            Contacto
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;

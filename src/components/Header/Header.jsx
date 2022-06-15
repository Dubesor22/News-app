import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-uppercase">
            Actualidad de Ayer
          </Link>
          <Link to="/" className="navbar-brand text-uppercase">
            Portada
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

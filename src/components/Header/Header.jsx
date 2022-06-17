import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./ntd.jpg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      {/* <div className="container-fluid"> */}
      <nav className="navbar navbar-header navbar-dark sticky-top">
        <div className="container container-nav">
          <Link to="/" className="navbar-item" rel="./ntd.jpg">
            <img className="logo" src={logo} alt="notToday" />
          </Link>
          <Link to="/" className="navbar-brand text-uppercase">
            {t("Header.notToday")}
          </Link>
          <Link to="/News" className="navbar-brand text-uppercase">
            {t("Header.news")}
          </Link>
          <Link to="/Contact" className="navbar-brand text-uppercase">
            {t("Header.contact")}
          </Link>
        </div>
        <div className="idiomas">
          <button
            onClick={() => i18n.changeLanguage("es")}
            type="button"
            class="btn btn-outline-dark"
          >
            Esp
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            type="button"
            class="btn btn-outline-dark"
          >
            Eng
          </button>
          <button
            onClick={() => i18n.changeLanguage("val")}
            type="button"
            class="btn btn-outline-dark"
          >
            Val
          </button>
          <button
            onClick={() => i18n.changeLanguage("cat")}
            type="button"
            class="btn btn-outline-dark"
          >
            Cat
          </button>
        </div>
      </nav>

      {/* </div> */}
    </>
  );
};

export default Header;

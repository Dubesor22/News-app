import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="container-fluid main">
        <Link to="/News">
          <button className="btn btn-primary button-start">
            Las Noticias de ayer!!
          </button>
        </Link>
        <Link to="/News"></Link>
      </div>
    </>
  );
};

export default Main;

import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <div className="navbar-brand">Fiorellas</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={`/category/rosas`}>
                  <div className="nav-link">Rosas</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={`/category/girasoles`}>
                  <div className="nav-link">Girasoles</div>
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">                 -------------------Borrar todo el boton de busqueda
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            {/* -------------Insertar CartWidget */}
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

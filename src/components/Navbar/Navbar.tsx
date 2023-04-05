import React from "react";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container justify-content-between">
        <a className="navbar-brand" href="/">
          Movies.com
        </a>
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
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item">
                    Action
                  </span>
                </li>
                <li>
                  <span className="dropdown-item">
                    Horror
                  </span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <span className="dropdown-item">
                    Fiction
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Judul Buku"
              aria-label="Search bar"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
              </svg>
            </span>
          </div>
        </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

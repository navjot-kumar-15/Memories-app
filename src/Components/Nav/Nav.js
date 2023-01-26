import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  // using a location hook
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Scheduler
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
                <Link
                  // adding active function
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-primary mx-3" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-3" to="/signup" role="button">
                SignUp
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

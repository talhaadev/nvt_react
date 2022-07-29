import React from 'react'
import { Outlet,Link } from "react-router-dom";
const header = () => {
  return (
   
    <header className="header_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <Link className="navbar-brand" to="/">
                <span>
                  BigWing
                </span>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="d-flex  flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>

                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/services">Services </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Login </Link>

                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </header>
    
  )
}

export default header
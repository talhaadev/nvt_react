import React from 'react'
import { Outlet,Link } from "react-router-dom";

const navbar = () => {
  return (
 
  <div class="hero_area">
    <header class="header_section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-8">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="/">
                <span>
                  BigWing
                </span>
              </Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="d-flex  flex-column flex-lg-row align-items-center">
                  <ul class="navbar-nav  ">
                    <li class="nav-item active">
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
                  <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <Outlet />
  </div>

 

  )
}

export default navbar
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/styles.css";

function Navbar() {
  return (
    <div>
      <header className='App-header'>
        <nav className='navbar fixed-top navbar-expand-lg navBG'>
          <div className='container-fluid '>
            <Link
              to='/'
              className='mynavbar'
              style={{ textDecoration: "none" }}
            >
              Dyslexia Helper
            </Link>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li style={{ paddingLeft: "1rem" }}> </li>
                <li className='mynavbar-item'>
                  <Link
                    to='/'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Home
                  </Link>
                </li>

                {/* <li className='mynavbar-item'>
                  <Link
                    to='/training_plans'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Training Plans
                  </Link>
                </li>
                <li className='mynavbar-item'>
                  <Link
                    to='/appointments'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Appointments
                  </Link>
                </li>
                <li className='mynavbar-item'>
                  <Link
                    to='/feedback'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Customer Feedback
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;

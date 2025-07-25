import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <header>
        <nav className='navbar fixed-top navbar-expand-lg navBG'>
          <div className='container-fluid '>
            <Link
              to='/'
              className='mynavbar'
              style={{ textDecoration: "none" }}
            >
              Helper
            </Link>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li style={{ paddingLeft: "1rem" }}> </li>
                {/* <li className='mynavbar-item'>
                  <Link
                    to='/'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Home
                  </Link>
                </li>

                <li className='mynavbar-item'>
                  <Link
                    to='/font_convertor'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Font Convertor
                  </Link>
                </li>

                <li className='mynavbar-item'>
                  <Link
                    to='/mind_map'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Mind Map
                  </Link>
                </li>

                <li className='mynavbar-item'>
                  <Link
                    to='/tts'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Text To Speech
                  </Link>
                </li>

                <li className='mynavbar-item'>
                  <Link
                    to='/color_overlay'
                    style={{ textDecoration: "none" }}
                    className='mynav-item nav-link'
                  >
                    Color Overlay
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <div style={{ paddingBottom: "4.5rem" }}></div>
      </header>
    </div>
  );
}
export default Navbar;

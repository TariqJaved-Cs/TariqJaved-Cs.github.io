import React from "react";
import { NavLink } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg mt-2 w-100">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="Nav_brand nav-link text-primary" to="/">
                  <span className="nav_brand"> ECMS</span>
                </NavLink>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        <span id="hov"> Home </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/Services"
                      >
                        <span id="hov"> Services </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/About"
                      >
                        <span id="hov"> About </span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="menu_active"
                        to="/Contact"
                      >
                        <span id="hov"> Contact Us </span>
                      </NavLink>
                    </li>
                    <li>
                      <div className="d-flex align-items-center pb-0 pt-1 pl-lg-3 ">
                        <ul className="list-unstyled d-flex justify-content-right pb-0 pt-0">
                          <li>
                            <a href="https://mail.google.com/">
                              <MailOutlineIcon />
                            </a>
                          </li>
                          <li>
                            <a href="https://web.whatsapp.com/">
                              <WhatsAppIcon />
                            </a>
                          </li>

                          <li>
                            <a href="https://www.facebook.com/">
                              <FacebookIcon />
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/">
                              <YouTubeIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

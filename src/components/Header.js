import React from 'react'
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import sagar_samaj_logo from "../assets/sagar_samaj_logo.png";
import sagar_samaj_logo_small from "../assets/sagar_samaj_logo_small.png";

const Header = () => {
  return (
    <div>
           <header className="header">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-sm-12">
              <a href="/" className="logo">
                <img src={sagar_samaj_logo} alt="#"  />
              </a>
            </div>
            <div className="col-md-6 col-sm-6 col-sm-12">
              <div className="header_right clearfix">
                <div className="header_top">
                  <span>
                    <i className="fa fa-phone" /> +91 97223 15218 / +91 99249
                    92637{" "}
                  </span>
                  <span>
                    <i className="fa fa-envelope-o" />{" "}
                    <a href="mailto:sagarsamajr@gmail.com">
                      sagarsamajr@gmail.com
                    </a>
                  </span>
                </div>
                <div className="col-md-12" style={{ height: 20 }}></div>
                <div className="login">
                  <span className="open_popup" href="#logoin_popup">
                    Login
                  </span>
                </div>
                <div className="mobile_menu">
                  <span className="open_popup" href="#logoin_popup">
                    Login
                  </span>
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <div className="container">
            <div className="menu">
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/">ABOUT US</a>
                </li>
                <li>
                  <a href="/">COMMITTEE</a>
                </li>
                <li>
                  <a href="/">DONORS</a>
                </li>
                <li>
                  <a href="/">DIRECTORY</a>
                </li>
                <li>
                  <a href="/">MATRIMONIAL</a>
                </li>
                <li>
                  <a href="/">EVENTS</a>
                </li>
                <li>
                  <a href="/">GALLERY</a>
                </li>
                <li>
                  <a href="/">DOWNLOAD</a>
                </li>
                <li>
                  <a href="/">CONTACT US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>{" "} 
    </div>
  )
}

export default Header
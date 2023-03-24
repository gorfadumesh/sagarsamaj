import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import sagar_samaj_logo from "../assets/sagar_samaj_logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const handleClickOff = () => {
    setActive(false);
  };
  return (
    <div>
      <header className="header">
        <div className="container clearfix">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-sm-12">
              <a href="/" className="logo">
                <img src={sagar_samaj_logo} alt="#" />
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
              
              </div>
            </div>
          </div>
        </div>
        <div className="nav">
          <div className="container">
            <div className="menu">
              <ul>
                <li>
                  <span
                    className={location.pathname === `/` ? `active` : null}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    HOME
                  </span>
                </li>
                <li>
                  <span
                    className={location.pathname === `/about` ? `active` : null}
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/about")}
                  >
                    ABOUT US
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/committee` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/committee")}
                  >
                    COMMITTEE
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/donors` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/donors")}
                  >
                    DONORS
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/directory` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/directory")}
                  >
                    DIRECTORY
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/matrimonial` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/matrimonial")}
                  >
                    MATRIMONIAL
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/events` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/events")}
                  >
                    EVENTS
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/gallery` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/gallery")}
                  >
                    GALLERY
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/download` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/download")}
                  >
                    DOWNLOAD
                  </span>
                </li>
                <li>
                  <span
                    className={
                      location.pathname === `/contact` ? `active` : null
                    }
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/contact")}
                  >
                    CONTACT US
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            <i className={active ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            <li>
              <span
                className={`nav-links ${
                  location.pathname === `/` ? `active` : null
                } `}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                  handleClickOff();
                }}
              >
                HOME
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/about` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/about");
                  handleClickOff();
                }}
              >
                ABOUT US
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/committee` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/committee");
                  handleClickOff();
                }}
              >
                {" "}
                COMMITTEE
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/donors` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/donors");
                  handleClickOff();
                }}
              >
                DONORS
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/directory` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/directory");
                  handleClickOff();
                }}
              >
                DIRECTORY
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/matrimonial` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/matrimonial");
                  handleClickOff();
                }}
              >
                MATRIMONIAL
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/events` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/events");
                  handleClickOff();
                }}
              >
                EVENTS
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/gallery` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/gallery");
                  handleClickOff();
                }}
              >
                GALLERY
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/download` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/download");
                  handleClickOff();
                }}
              >
                DOWNLOAD
              </span>
            </li>
            <li>
              <span
                className={`${
                  location.pathname === `/contact` ? `active` : null
                } nav-links`}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/contact");
                  handleClickOff();
                }}
              >
                CONTACT US
              </span>
            </li>
          </ul>
          {/* <Button>SIGN UP</Button> */}
        </nav>
      </header>
    </div>
  );
};

export default Header;

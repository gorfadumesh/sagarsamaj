import React from 'react'
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import sagar_samaj_logo from "../assets/sagar_samaj_logo.png";
import {  useNavigate   } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()
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
                  <span style={{cursor:"pointer"}} onClick={()=>navigate("/")}>HOME</span>
                </li>
                <li>
                  <span style={{cursor:"pointer"}}  onClick={()=>navigate("/about")} >ABOUT US</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/committee")} >COMMITTEE</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/donors")} >DONORS</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/directory")} >DIRECTORY</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/matrimonial")} >MATRIMONIAL</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/events")} >EVENTS</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/gallery")} >GALLERY</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/download")} >DOWNLOAD</span>
                </li>
                <li>
                <span style={{cursor:"pointer"}}  onClick={()=>navigate("/contact")} >CONTACT US</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header> 
    </div>
  )
}

export default Header
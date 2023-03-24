import React from 'react'
import sagar_samaj_logo from "../assets/sagar_samaj_logo.png";

const Footer = () => {
  return (
    <div>
          <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_logo">
                <img src={sagar_samaj_logo} alt="#" />
              </div>
              <div className="link_div family_div">
                <ul>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">Total Families - 1501</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">Total Family Member - 1240</a>
                  </li>
                  {/*<li><i class="fa fa-caret-right" aria-hidden="true"></i><a href="javascript:void(0)">Total Visitor - 250</a></li>*/}
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="title_ftr">Quick links</div>
              <div className="link_div">
                <ul className="clearfix">
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">ABOUT US</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">COMMITTEE</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">DONORS</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">EVENTS</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">GALLERY</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">COLLECTION CENTER</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">DOWNLOAD</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">DIRECTORY</a>
                  </li>
                  <li>
                    <i className="fa fa-caret-right" aria-hidden="true" />
                    <a href="/">CONTACT US</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="title_ftr">Contact Us</div>
              <div className="contant_info">
                <span>
                  <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                  sagarsamajr@gmail.com
                </span>
                {/* <p>
                <i className="fa fa-phone" aria-hidden="true" /> +91 98250 62649
              </p>
              <p>
                <i className="fa fa-phone" aria-hidden="true" /> +91 94286 00513
              </p> */}
              </div>
              <div className="social_icon">
                <div className="title_ftr">Get in touch</div>
                <ul>
                  <li className="clr-1">
                    <a
                      href="/"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  {/*                        <li class="clr-2"><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li class="clr-3"><a href="javascript:void(0);"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li class="clr-4"><a href="javascript:void(0);"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="left">
              <span className="copyright">
                <a href="/">
                  Copyright @ 2023 Sagar Samaj Trust,
                  Junagadh. All rights Reserved
                </a>
              </span>
            </div>
            <div className="right">
              {/*<span class="Design"><a href="javascript:void(0);">Design By : www.livetheme.in</a></span>*/}
            </div>
          </div>
        </div>
      </footer>{" "}
    </div>
  )
}

export default Footer
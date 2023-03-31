import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import sagar_samaj_logo_small from "../assets/sagar_samaj_logo_small.png";
import Rameshbhai from "../assets/family/Rameshbhai.jpg";
import Girishbhai from "../assets/family/Girishbhai.jpg";
import EventsUpdate from "./EventsUpdate";

const Banner = () => {
  return (
    <div>
      <div className="flash-message"></div>
      <section className="banner">
        <div className="container">
          <div className="banner_img">
            <img src={sagar_samaj_logo_small} alt="#" />
          </div>
        </div>
      </section>
      <section className="banner_overlay_section">
        <div className="container">
          <section className="coumn_section">
            <div className="row">
              <div className="col-md-8">
                <h2>HISTORY OF SAGAR</h2>
                <p style={{ textAlign: "justify" }}>
                  The Sagar claim to be of the Kshatriya varna. They are one of
                  a number of Rajput groups such as the Kathi found in
                  Saurashtra, and are concentrated in the districts of Junagadh,
                  Jamnagar, Bhavnagar, Amreli and Rajkot. The Sagar speak the
                  Kathiwari dialect of Gujarati. The Sagar have four territorial
                  divisions, the Suratia, Gujjar, Badai and Mewari.There are
                  connubial and commensal relations among the four divisions.
                  The Sagar are further divided into clans called ataks, the
                  main ones being Gohil, Solanki, Chauhan, Hajani,
                  Parmar,Nanera, karena , Got etc. They are a community of large
                  to medium sized farmers, with many now beginning to migrate to
                  the cities, and are in the process of getting urbanized.
                </p>
                <div className="content_img mb30">
                  {/* <img src="img/front/img_1.jpg" alt="#"  /> */}
                </div>
                <div className="commit-mumber">
                  <h2>Committee Member</h2>
                  <div className="commiti_div clearfix" id="slider">
                    <div
                      className="mumber_bx"
                      id={4}
                      style={{ cursor: "pointer" }}
                    >
                      <finger>
                        {" "}
                        <img
                          src={Rameshbhai}
                          style={{ height: 112, width: "140px" }}
                          title="Rameshbhai"
                          alt="#"
                        />
                      </finger>
                      <h3>
                      રમેશભાઈ કોડાવલા <br /> (પ્રમુખ)
                      </h3>
                    </div>
                    <div
                      className="mumber_bx"
                      id={12}
                      style={{ cursor: "pointer" }}
                    >
                      <finger>
                        {" "}
                        <img
                          src={Girishbhai}
                          style={{ height: 112, width: "140px" }}
                          title="Girishbhai"
                          alt="#"
                        />
                      </finger>
                      <h3>
                      ગીરીશભાઈ શિર <br /> (મંત્રી)
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="side_bar">
                <EventsUpdate />
                  {/* <div className="news-events mb30">
                    <div className="title">News &amp; Events</div>
                    <div className="news_div">
                      <h3 style={{ textAlign: "center" }}>
                        <b>No Events found</b>
                      </h3>
                    </div>
                  </div> */}
                  {/* <div className="matrimonial_div">
                    <div className="title">Last Update Matrimonial</div>
                    <div className="matrimonial_box">
                      <ul className="clearfix">
                        <li>
                          <img src="img/admin/family/1676565538_IMG_20230216_220317.jpg" alt="#"  />
                          img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt="#" 
                        </li>
                        <li>
                          <img src="img/admin/family/1634550868_avp.jpg" alt="#" />
                          img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt="#"
                        </li>
                        <li>
                          <img src="img/admin/family/1648053719_IMG-20220323-WA0042.jpg" alt="#"  />
                          img src="https://www.84kadvapatidar.com/img/front/mt_img_1.jpg" alt="#"
                        </li>
                      </ul>
                      < div class="btn">
                      <a href="/">More</a>
                   </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Banner;

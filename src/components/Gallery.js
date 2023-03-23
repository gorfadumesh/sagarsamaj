import React from 'react'
import samuhlagn from "../assets/event/samuhlagn.png";
import samuhlagn2 from "../assets/event/samuhlagn2.png";
import samuhlagn3 from "../assets/event/samuhlagn3.png";

const Gallery = () => {
  return (
    <div>
          <section className="gallery_section">
        <div className="container">
          <h2 className="text-center">Our Trust Activities</h2>
          <div className="glr_div clearfix">
            <div className="glr_box">
              <img src={samuhlagn} alt="Invitation" />
            </div>
            <div className="glr_box">
              <img src={samuhlagn2} alt="Invitation" />
            </div>
            <div className="glr_box">
              <img src={samuhlagn3} alt="Invitation" />
            </div>
            <div className="glr_box">
              <img src={samuhlagn} alt="Invitation" />
            </div>
            <div className="load_btn">
              <a href="/">Load More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
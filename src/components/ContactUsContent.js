import React from 'react'

const ContactUsContent = () => {
  return (
    <div>
          <div>
      
          <div className="flash-message">
        </div>
        <section className="banner inner_banner"> 
          <div className="container">
            <div className="innerbanner_text">
              <h2>Contact Us</h2>
            </div>
          </div>
        </section>
        <section className="banner_overlay_section"> 
          <div className="container">
            <section className="coumn_section">
              <div className="row">
                <div className="col-md-6">
                    
                  <iframe src="https://maps.google.com/maps?q=Junagadh&t=&z=10&ie=UTF8&iwloc=&output=embed" width={400} height={300} frameBorder={0} style={{border: 0}} allowFullScreen />
                  {/*<div class="map"></div>*/}
                </div>
                <div className="col-md-6">
                  <h2 className="text-left mb15">Site Location</h2>
                  <div className="address_div">
                    Sagar Samaj Junagadh,<br />
                    Bhavanath <br />
                    B/H Mahakali Petrol pump,<br />
                    Junagadh,<br />
                    {/* D. Ghandhinagar,<br />
                    Ahmedabad<br /> */}
                    <br />
                    Email: 
                    <a href="mailto:sagarsamaj@gmail.com">sagarsamaj@gmail.com</a>,
                    <a href="mailto:sagarsamaj@gmail.com">sagarsamaj@gmail.com</a>
                    <br />
                    <br />
                    Contact: +91 98250 62649 / +91 94286 00513
                  </div>
                </div>
                <div className="col-md-12">                    
                  <form  method="post" id="contact-form" name="contact-form">
                    <div className="row contact_form mt50">
                      <h2 className="text-center mt20 mb30">Quick Contact</h2>
                      <div className="col-md-12">
                        <input type="text" name="customer_name" className="input required" placeholder="Full Name" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="emails" className="input required email" placeholder="Email Address" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" name="subject" className="input required" placeholder="Subject" />
                      </div>
                      <div className="col-md-12">
                        <textarea name="message" id="message" className="required" placeholder="Message" defaultValue={""} />
                      </div>
                      <input type="hidden" name="_token" defaultValue="OrSaHJJEhrpZ1xWcS2R9zzPGFvWeljwPVe9cj8k0" />
                      <div className="col-md-12 text-center mt0">
                        <input type="submit" defaultValue="Submit" className="input_btn" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </section>
  
     
        {/* Javascript files */}
        {/* Main javascript file */}
      </div>
    </div>
  )
}

export default ContactUsContent
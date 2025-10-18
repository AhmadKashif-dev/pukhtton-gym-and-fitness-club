import React from "react";
import "./Footer.css";
import wp from "../../assets/whatsapp-logo.jpg"

const Footer = () => {
  return (
    <>
    <div className="Footer-container" id="about">
    <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Address</h3>
            <a href="googlemaplink">kuza Bandai, Swat</a>
            {/* <a href="wa.me"><img alt="whatsapp" src={wp} height="80" width="240" className="btn"/></a> */}
          </div>
        <div className="box">
            <h3>Contact Us </h3>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <i className="fa">
                <a href="tel:+91 8888817886">+92 333 9501965 </a></i>  
                <br></br>
                <i className="fa">
                <a href="mailto:info.shubham@gmail.com">info@pukhtoongym.com</a></i>
            </div>
        <div className="box">
            <h3>Follow us</h3>
            <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                     />
                <div className="hero1">
                <h1>Reach us at</h1>
                 <div className="home__social-icon">
                 <a href="https://www.facebook.com/Pukht00NWorld/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"> Facebook</i></a>
                 <a href="https://api.whatsapp.com/send?phone=%2B923127488522&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExQ202UWFERk1pQ2Vmb09BcAEeIa9B0WkeAW-Tl850DqSDsAmgKTFz-gI7Yn8r0nmWgVX9RLcoQbN3OJ3a1ZE_aem_UpWAt7h0Ofg20Yr2VcolpQ" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp">Whatsapp</i></a>
                 <a href="https://maps.app.goo.gl/WdHrCdTb2GwFP6JZ7" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google">Google Maps</i></a>
               </div>
            </div>
        </div> 
      </div>
    </section>
    <div className="credits">
        <p>© {new Date().getFullYear()} Pukhtoon Gym and Fitness Club. All Rights Reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;

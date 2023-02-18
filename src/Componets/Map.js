import React from "react";

import "./Map.css";
const Contact = () => {
  return (
    <>
      <div className="contact_section_container" id="contact-us">
        <div className="container_container">
          <div className="google_map_location">
            <div className="gmap">
              <iframe
                title="gmap_location"
                class="gmap_iframe"
                width="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=plot no 178, Om Dental Clinic, Ulwe, Shop- C13, Sai Sapphire, 180, Sector 20, Ulwe, Maharashtra 410206, India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
          <div className="basic_contact_user_form">
            <div className="clinic_time_table">
              <h2 className="hotel_name">
                <span>
                  <i className="fa-solid fa-angles-right"></i>
                </span>
                RASSABHAKARI HOTEL
              </h2>

            </div>
            <hr />
            
            <div className="contact">
              <li> Behind Jijamata Garden,  412210</li>
              <li>Jijamata Society Shirur</li>
              <li>Maharashtra-412210 India</li>
              <li>Call/Whatsap:-9876543210</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

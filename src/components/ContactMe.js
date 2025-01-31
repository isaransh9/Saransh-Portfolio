import React from "react";

const ContactMe = () => {
  return (
    <div className="contactMe-container">
      <h1>Contact Me</h1>
      <div className="input-container">
        <div className="inputDetails">
          <input type="text" placeholder="Full Name" className="input-box" />
          <input type="text" placeholder="Email" className="input-box" />
          <input
            type="number"
            placeholder="Phone Number"
            className="input-box"
          />
          <input type="text" placeholder="Subject" className="input-box" />
        </div>
        <div className="Message">
          <textarea
            cols="30"
            rows="10"
            placeholder="Your message"
            className="text-message"
          >
            Your Message
          </textarea>
          <input type="submit" value="Send Message" className="sendmsg-btn" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

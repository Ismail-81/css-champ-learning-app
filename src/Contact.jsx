import React from "react";
import "./Css/Contact.css";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div className="contact-container">
      <button className="back" onClick={() =>navigate("/background")}>Back To Game</button>
      <div className="contact-box">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Got feedback or questions? We’d love to hear from you 
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Write your message here..."></textarea>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

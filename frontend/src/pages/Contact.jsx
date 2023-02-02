import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        firstname: firstName,
        lastname: lastName,
        email,
        message,
        phone,
      });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="Contact-page">
      <form className="component-contact">
        <span className="title-contact">Contact</span>
        <div className="component-firstname-lastname">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="firstname"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="lastname"
          />
        </div>
        <div className="component-email-phone">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
            required
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="phone"
            required
          />
        </div>
        <div className="component-message">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            required
          />
        </div>
        <NavLink to="/" className="component-btn">
          <button
            onClick={handleSubmit}
            className="button-contact"
            type="button"
          >
            Send Email
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default Contact;

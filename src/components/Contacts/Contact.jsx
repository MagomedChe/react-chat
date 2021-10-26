import React from "react";
import { Link, NavLink } from "react-router-dom";

function Contact({ contact }) {
  return (
    <Link to={`/${contact._id}`}>
      <div className="contact">
        <div className="contact-avatar">A</div>
        <div className="info">
          <div className="contact-name">{contact.fullname}</div>
          <div className="contact-last-message">Последнее сообщение</div>
        </div>
        <div className="contact-last-time">12:30</div>
      </div>
    </Link>
  );
}

export default Contact;

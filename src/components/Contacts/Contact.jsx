import React from "react";
import {Link, NavLink} from "react-router-dom";

function Contact({ contact }) {
  return (
    // <NavLink to={`/${contact._id}`} activeClassName="selected">
      <div className="contact">
        <NavLink to={`/${contact._id}`} activeClassName="selected">
          <div className="contact-avatar">A</div>
          <div className="info">
            <div className="contact-name">{contact.fullname}</div>
            <div className="contact-last-message">Последнее сообщение</div>
          </div>
          <div className="contact-last-time">12:30</div>
        </NavLink>

      </div>
    // </NavLink>
  );
}

export default Contact;

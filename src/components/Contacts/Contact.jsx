import React from "react";

function Contact(props) {
  return (
    <div className="contact">
      <div className="contact-avatar">
        A
      </div>
      <div className="info">
        <div className="contact-name">{props.contact.fullname}</div>
        <div className="contact-last-message">
          Последнее сообщение
        </div>
      </div>
      <div className="contact-last-time">12:30</div>
    </div>
  );
}

export default Contact;

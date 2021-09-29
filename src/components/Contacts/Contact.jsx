import React from "react";

function Contact(props) {
  return (
    <div className="contact">
      <div className="contact-avatar">
        A
      </div>
      <div className="">
        <div className="contact-name">{props.contact.fullname}</div>
        <div className="contact-last-message">
          Последнее сообщение
          <div className="date">12:30</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

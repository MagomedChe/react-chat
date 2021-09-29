import React from "react";

function Contact(props) {
  return (
    <div className="contact">
      <div className="avatar">
        A
      </div>
      <div className="">
        <div className="contact-name">{props.contact.fullname}</div>
        <div className="contact-last-message">
          Последнее сообщение
          <div className="date">дата</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

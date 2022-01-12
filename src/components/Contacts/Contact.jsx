import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { CSSTransition } from 'react-transition-group';
import Dropdown from './Dropdown';

function Contact({ contact }) {
  const [dropdown, setDropdown] = useState(false);

  const handleOpenDropdown = (e) => {
    setDropdown(!dropdown);
    // e.stopPropagation()

  }
  return (
    <div className="contact">
      <NavLink to={`/${contact._id}`}>
        <div className="contact-avatar">{contact.fullname[0]}</div>
        <div className="info">
          <div className="contact-name">{contact.fullname}</div>
          <div className="contact-last-message">
            {contact.lastMessage.content}
          </div>
        </div>
        <div className="dropdown">
          <div style={{
            fontWeight: 'bold',
            fontSize: '25px'
          }}
          onClick={handleOpenDropdown}
          >
            ...
          </div>
          {dropdown &&
          <Dropdown
              setDropdown={setDropdown}
              dropdown={dropdown}

          />
          }
        </div>
        <div className="contact-last-time">
          {moment(contact.lastMessage.time).format('HH:MM')}
        </div>
      </NavLink>
    </div>
  );
}

export default Contact;

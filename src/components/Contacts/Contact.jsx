import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import Dropdown from './Dropdown';
import useOutsideClick from '../../useOutsideClick';

function Contact({ contact }) {
  const [dropdown, setDropdown] = useState(false);
  const [hover, setHover] = useState(false);

  //Для отслеживания клика, чтобы сбросить dropdown на false после открытия
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (dropdown) setDropdown(false);
  });
  //

  const handleOpenDropdown = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <div
      className="contact"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <NavLink to={`/${contact._id}`}>
        <div className="contact-avatar">{contact.fullname[0]}</div>
        <div className="info">
          <div className="contact-name">{contact.fullname}</div>
          <div className="contact-last-message">
            {contact.lastMessage.content}
          </div>
        </div>
        <div ref={ref}>
          {hover ? (
            <div onClick={handleOpenDropdown}
            className="dropdown"
            >
              ...
            </div>
          ) : (
            <div className="contact-last-time">
              {moment(contact.lastMessage.time).format('HH:MM')}
            </div>
          )}

          {dropdown && (
            <Dropdown setDropdown={setDropdown} dropdown={dropdown} />
          )}
        </div>
      </NavLink>
    </div>
  );
}

export default Contact;

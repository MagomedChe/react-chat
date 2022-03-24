import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import Dropdown from './Dropdown';
import useOutsideClick from '../../useOutsideClick';
import style from './style.module.css'

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
      className={style.contact}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <NavLink to={`/${contact._id}`} className={({isActive}) =>
        (isActive ? style.active : '')
      }>
        <div className={style.contact_avatar}>{contact.fullname[0]}</div>
        <div>
          <div className={style.contact_name}>{contact.fullname}</div>
          <div className={style.contact_last_message}>
            {contact.lastMessage.content}
          </div>
        </div>
        <div ref={ref}>
          {hover ? (
            <div onClick={handleOpenDropdown} className={style.dropdown}>
              ...
            </div>
          ) : (
            <div className={style.contact_last_time}>
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

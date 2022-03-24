import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Socials from './Social';
import MediaIcons from './MediaIcons';
import style from './style.module.css'


function Profile({ activeProfile, setActiveProfile }) {
  const contactId = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts).find(
    (contacts) => contacts._id === contactId,
  );

  return (
    <div className={style.profile}>
      <div className={style.profile_info}>
        <div className={style.lage_avatar}>{contacts?.fullname[0]}</div>
        <div className={style.profile_name}>{contacts?.fullname}</div>
        <div className={style.profile_nickname}>@{contacts?.username}</div>
        <div className={style.profile_connection}>
          <MediaIcons />
        </div>
        <div className={style.social}>
          <Socials contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default Profile;

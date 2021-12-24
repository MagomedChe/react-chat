import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Socials from './Social'
import MediaIcons from './MediaIcons'

// const useStyles = makeStyles({
//   marginIcon: {
//     marginRight: 10,
//     marginLeft: 10,
//   },
// });

function Profile({activeProfile, setActiveProfile}) {

  const contactId = useParams().id;
  const contacts = useSelector((state) => state.contacts.contacts)
      .find(contacts => contacts._id === contactId)



  return (
    <div className="profile">
      <div className="profile-info">
        <div className="lage-avatar">{contacts?.fullname[0]}</div>
        <div className="profile-name">{contacts?.fullname}</div>
        <div className="profile-nickname">@{contacts?.username}</div>
        <div className="profile-connection">
          <MediaIcons/>
        </div>
        <div className="social">
          <Socials contacts={contacts}/>
        </div>
      </div>
    </div>
  );
}

export default Profile;

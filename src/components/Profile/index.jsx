import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@mui/material/IconButton";
import BasicButtons from "./Social";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// const useStyles = makeStyles({
//   marginIcon: {
//     marginRight: 10,
//     marginLeft: 10,
//   },
// });

function Profile({activeProfile, setActiveProfile}) {

  // const contactId = useParams().id;
  // const contacts = useSelector((state) => state.contacts.contacts)
  //     .filter(contacts => contacts._id === contactId)
  //     .map(contact => contact);
  //
  // console.log(contacts)


  return (
    <div className={activeProfile ? "profile active" :  "profile"}>
      <div className="profile-info">
        <div className="lage-avatar">A</div>
        <div className="profile-name">f</div>
        <div className="profile-nickname">@nickname</div>
        <div className="profile-connection">
          <IconButton>
            <LocalPhoneIcon />
          </IconButton>
          <IconButton>
            <VideoCameraFrontIcon  />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
        </div>
        <div className="social">
          <BasicButtons />
        </div>
      </div>
    </div>
  );
}

export default Profile;

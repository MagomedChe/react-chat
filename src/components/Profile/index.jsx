import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@mui/material/IconButton";
import BasicButtons from "./Social";

const useStyles = makeStyles({
  marginIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
});

function Profile(props) {
  const classes = useStyles();

  return (
    <div className="profile">
      <div className="profile-info">
        <div className="lage-avatar">A</div>
        <div className="profile-name">Фамилия Имя</div>
        <div className="profile-nickname">@nickname</div>
        <div className="profile-connection">
          <IconButton>
            <LocalPhoneIcon />
          </IconButton>
          <IconButton>
            <VideoCameraFrontIcon className={classes.marginIcon} />
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

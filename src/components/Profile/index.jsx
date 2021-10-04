import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@material-ui/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

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
          <LocalPhoneIcon />
          <VideoCameraFrontIcon className={classes.marginIcon} />
          <EmailIcon />
        </div>
        <div className="social">
          <div className="social-name">
            <InstagramIcon fontSize="small" color="action" />
            nickname
          </div>
          <div>
            <FacebookIcon fontSize="small" color="action" />
            nickname
          </div>
          <div>
            <TwitterIcon fontSize="small" color="action" />
            nickname
          </div>
        </div>
        <div className="media">Кнопка</div>
      </div>
    </div>
  );
}

export default Profile;

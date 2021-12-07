import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export default function BasicButtons() {
    const contactId = useParams()._id;
    const contacts = useSelector((state) => state.contacts.contacts)
        .filter(contacts => contacts._id === contactId)
        .map(contact => contact);
  return (
    <Stack spacing={0} direction="column">
      <Button variant="text" color="inherit">
        <InstagramIcon fontSize="small" color="action" />
        nickname
      </Button>
      <Button variant="text" color="inherit">
        <FacebookIcon fontSize="small" color="action" />
        facebook
      </Button>
      <Button variant="text" color="inherit">
        <TwitterIcon fontSize="small" color="action" />
        Twitter
      </Button>
    </Stack>
  );
}

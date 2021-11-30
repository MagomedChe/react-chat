import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function BasicButtons() {
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

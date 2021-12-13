import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Socials({ contacts }) {
  return (
    <Stack spacing={0} direction="column">
      {contacts?.socials?.instagram !== undefined && (
        <Button variant="text" color="inherit">
          <InstagramIcon
            fontSize="small"
            color="action"
            className="social-icon"
          />
          {contacts.socials.instagram}
        </Button>
      )}

      {contacts?.socials?.facebook !== undefined && (
        <Button variant="text" color="inherit">
          <FacebookIcon
            fontSize="small"
            color="action"
            className="social-icon"
          />
          {contacts.socials.facebook}
        </Button>
      )}

      {contacts?.socials?.twitter !== undefined && (
        <Button variant="text" color="inherit">
          <TwitterIcon
            fontSize="small"
            color="action"
            className="social-icon"
          />
          {contacts.socials.twitter}
        </Button>
      )}
    </Stack>
  );
}

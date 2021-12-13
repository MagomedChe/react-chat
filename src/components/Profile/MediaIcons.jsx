import React from 'react'
import IconButton from '@mui/material/IconButton'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import EmailIcon from '@mui/icons-material/Email'

function MediaIcons (props) {
  return (
    <div>
      <IconButton>
        <LocalPhoneIcon />
      </IconButton>
      <IconButton>
        <VideoCameraFrontIcon />
      </IconButton>
      <IconButton>
        <EmailIcon />
      </IconButton>
    </div>
  )
}

export default MediaIcons
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FormPropsTextFields({setSearchContact}) {



  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="Search contact"
          label="Search contact"
          type="search"
          size="small"
          onChange={e => setSearchContact(e.target.value)}
        />
      </div>
    </Box>
  );
}

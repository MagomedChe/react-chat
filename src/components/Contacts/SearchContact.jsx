import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { makeStyles } from "@material-ui/styles";

// const useStyle = makeStyles({
//   searchInput: {
//       // width: '90%',
//       // height: 10,
//       // margin: 'auto',
//   }
// })

export default function FormPropsTextFields() {
  // const classes = useStyle();

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
          // className={classes.searchInput}
          id="Search contact"
          label="Search contact"
          type="search"
          size="small"
        />
      </div>
    </Box>
  );
}

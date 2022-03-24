import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

function SkeletonChildrenDemo(props) {
  const preloader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return preloader.map((index) => {
    return (
      <div key={index}>
        <Box sx={{ display: 'flex', alignItems: 'center' }} animation="wave">
          <Box sx={{ margin: 1 }}>
            <Skeleton variant="circular" animation="wave">
              <Avatar />
            </Skeleton>
          </Box>
          <Box sx={{ width: '220px' }}>
            <Skeleton width="100%" height="50px" animation="wave"></Skeleton>
            <Skeleton width="100%" animation="wave"></Skeleton>
          </Box>
        </Box>
      </div>
    );
  });
}



export default function SkeletonChildren() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo loading />
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}

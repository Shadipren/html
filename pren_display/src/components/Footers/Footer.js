import React from 'react';
import { makeStyles, Container, Box, Typography} from '@mui/material';


export default function Footer() {

  return (
      <Box display= "relative" flexWrap="wrap" alignItems="center"  sx={{
        bgcolor: "rgba(171, 196, 202, 0.7)", textAlign: 'center', mt: 6, py: 3}}
        >
        <Typography  color='textSecondary'  component="p" variant="caption" gutterBottom={false}
        >© 2022 HSLU All rights reserved.
        </Typography>
      </Box>
  );
}

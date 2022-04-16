import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Footer() {

  return (
      <Box py={6}  display= "relative" flexWrap="wrap" alignItems="center"  sx={{
        bgcolor: "rgba(171, 196, 202, 0.7)", textAlign: 'center', my: 6}}
        >
        <Typography  color='textSecondary'  component="p" variant="caption" gutterBottom={false}
        >© 2022 HSLU All rights reserved.
        </Typography>
      </Box>
  );
}

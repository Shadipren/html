import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = ({position, genus, family, sciName, comNames, matchPos}) => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Plant # {position}
      </Typography>
      {() => {
        if (matchPos === position){
          return <Typography variant="h5" color="green" component="div">matched</Typography>
        }
      }}
      <Typography variant="h5" component="div">
        {sciName}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {family}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {genus}
      </Typography>
      <Typography variant="body2">
        {comNames.map(x => {
          return x
        })
        }
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function PlantCard({data, match}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card(position=data.position, genus=data.genus, family=data.family, sciName=data.sciName, comNames=data.comNames, matchPos=match.position)}</Card>
  </Box>
  );
}
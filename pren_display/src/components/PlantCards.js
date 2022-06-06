import React from 'react';
import {Box, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export const PlantCards = ({plantData, match}) => {
  return (
    <>
      {plantData.length>0 && plantData.map((data) => {
        return (
          <Grid item xs={6} lg={2}>
            <PlantCard
              data={data}
              match={match}
              // position={data.position}
              // same_plant={data.same_plant}
            />
          </Grid> 
        );
      })}
    </>
  );
};

const PlantCard = ({data, match}) => {
  return (
    <Box sx={{ width: 300, height:200}}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Plant # {data.position}
              </Typography>
              {(() => {
                console.log('match: ',match);
                if (match === data.position){
                  return (<Typography variant="h5" color="green" component="div">matched</Typography>)
                }
              })()}
              <Typography variant="h5" component="div">
                {data.scientificName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.family}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.genus}
              </Typography>
              <Typography variant="body2">
                {data.commonNames.map(x => {return x + " "})}
              </Typography>
            </CardContent>
          </React.Fragment>
        </Card>
    </Box>
  );
};
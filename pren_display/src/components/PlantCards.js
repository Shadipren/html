import React, { useEffect, useState, useContext} from 'react';
import {Box, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { SocketContext } from './Socket';
import update from 'immutability-helper';

export const PlantCards = () => {
  const socket = useContext(SocketContext);

  const [plantData, setPlantData] = useState([]);
  const [matchPosition, setMatchPosition] = useState(-1);
  // const pdat = React.useRef(plantData);

  // const setPlantDataFunc = data => {
  //   console.log('plant data received: ', data);
  //   console.log('current plant data: ',pdat.current);
  //   const index = pdat.current.findIndex((pd) => pd.position === data.position);
  //   // console.log('index of plant data position: ' + data.position + ' index in array: ' + index);
  //   if (index !== -1) {
  //       const updatePd = update(pdat.current, { $splice: [[index, 1, data]] });
  //       setPlantData(updatePd);
  //       console.log('pd after update:', pdat.current)
  //   }
  //   else {
  //       setPlantData(arr => [...arr, data]);
  //   }
  // }

  useEffect(() => {
    socket.on('plant_data', (data) => {
      // setPlantDataFunc(data);
      console.log('plant data received: ', data);
      console.log('current plant data: ',plantData);
      const index = plantData.findIndex((pd) => pd.position === data.position);
      // console.log('index of plant data position: ' + data.position + ' index in array: ' + index);
      if (index !== -1) {
          const updatePd = update(plantData, { $splice: [[index, 1, data]] });
          setPlantData(updatePd);
          console.log('pd after update:', plantData)
      }
      else {
          setPlantData(arr => [...arr, data]);
      }
    })
    socket.on('match_found', (data) => {
      setMatchPosition(data)
    })
    socket.on('timer_start', () => {
      console.log('Clearing out Plant data');
      setPlantData([])
    })
  }, [socket]);


  return (
    <>
      <Grid container mb={2}>           
        {plantData.length>0 && plantData.map((data) => {
          return (
            <Grid item xs={6} lg={2}>
              <PlantCard
                data={data}
                match={matchPosition}
              />
            </Grid> 
          );
        })}
      </Grid>
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
                // console.log('match: ',match);
                if (match === data.position){
                  return (<Typography variant="h5" color="green" component="div">!!matched!!</Typography>)
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

export default PlantCards
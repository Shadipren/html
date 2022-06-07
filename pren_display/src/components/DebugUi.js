// import React, { useEffect, useState } from 'react';
// // import { getSocket } from './SocketSingleton';
// import { Slider } from '@material-ui/core';
// import { Stack } from '@mui/material'
// import { Box } from '@material-ui/core';
// import update from 'immutability-helper';

// const DebugUi = () => {

//   function uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//       var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//       return v.toString(16);
//     });
//   }

//   const [testData, setTestData] = useState([]);
//   // const [statusInfo, setStatusInfo] = useState("");
//   const [events, setEvents] = useState([]);
//   const [speed, setSpeed] = useState([]);
//   const [voltagePrint, setVoltagePrint] = useState([]);
//   const [coils, setCoils] = React.useState([]);
//   const [acceleration, setAcceleration] = useState([]);
//   const [voltageMotor, setVoltageMotor] = useState([]);
//   const [plantData, setPlantData] = useState([]);
//   const [sliderVal, setSliderVal] = useState(50);
  
//   // let endpoint = 'http://localhost:5000'
//   // console.log('env: '+process.env.NODE_ENV)
//   // if(process.env.NODE_ENV !== 'development'){
//   //   endpoint = window.location.protocol+"//flask-pren.herokuapp.com"
//   // }
//   // const socket = getSocket(endpoint);

//   const init = async() => {  
//     var response = await fetch(endpoint+"/run")
//     var result = await response.json();
//     console.log("init result", result)
//     // setStatusInfo(result.status)
//   }

//   useEffect(()=>{
//     init()
//     socket.on('update', (data) => {
//       setTestData(arr => [...arr, ...data])
//     })
//     socket.on('event', (data) => {
//       setEvents(arr => [...arr, data])
//     })
//     socket.on('speed', (data) => {
//       setSpeed(data)
//     })
//     socket.on('voltage_print', (data) => {
//       setVoltagePrint(data)
//     })
//     socket.on('coils', (data) => {
//       setCoils(data)
//     })
//     socket.on('acceleration', (data) => {
//       setAcceleration(data)
//     })
//     socket.on('voltage_motor', (data) => {
//       setVoltageMotor(data)
//     })
//     socket.on('plant_data', (data) => {
//       data = JSON.parse(data)
//       console.log('received plant_data: ', data)
//       const index = plantData.findIndex((pd) => pd.position === data.data.message.position);
//       console.log('index of plant data position: '+data.position+' index in array: '+index)
//       if (index !== -1){
//         const updatePd = update(plantData, {$splice: [[index, 1, data]]});
//         setPlantData(updatePd);}
//       else{
//         setPlantData(arr =>[...arr, data])
//       }
//     })
//   },[])

//   const request = () => {
//     socket.emit('request_test_data')
//   }

//   const change_speed = (event, newValue) => {
//     setSliderVal(newValue)
//     console.log('speed changed by slider: '+sliderVal)
//     socket.emit('change_speed', sliderVal)
//   }

//     return (
//       <div className="App">
//              {console.log("retardo")} 
//         <button onClick={request}>Request Data</button>
//         <Box sx={{width:500}}>
//           <Stack spacing={2} direction="row" sx={{mb:1}} alignItems="center">
//           <Slider aria-label="Speed Regulator" min={0} max={100} value={sliderVal} onChange={change_speed} />
//           </Stack>
//         </Box>
//         <div>
//           <span>Speed: {speed}</span><br/>
//           <span>VoltagePrint: {voltagePrint}</span><br/> 
//           <span>
//             Coils:
//             <ul className="list">
//               {coils.filter(x => x.nr_coil !== undefined).map(x => {
//                 return <p key={uuidv4()}>{x.nr_coil} | {x.value}</p>
//               })}
//             </ul>
//           </span>
//           <span>
//             Acceleration:
//             <ul className="list">
//               {acceleration.filter(x => x.axis !== undefined).map(x => {
//                 return <p key={uuidv4()}>{x.axis} | {x.value}</p>
//               })}
//             </ul>
//           </span>
//           <span>VoltageMotor: {voltageMotor}</span><br/>
//           <span>
//             Plant Data:
//             <ul className="list">
//               {plantData.filter(x => x.position !== undefined).map(x => {
//                 return (
//                   <div key={uuidv4()}>
//                       <p key={uuidv4()}>position: | {x.position}</p>
//                       <p key={uuidv4()}>genus: | {x.genus}</p>
//                       <p key={uuidv4()}>family: | {x.family}</p>
//                       <p key={uuidv4()}>scientific name: | {x.scientificName}</p>
//                       <div key={uuidv4()}>commonNames: | 
//                         {x.commonNames.map(y => {return <p key={uuidv4()}>{y}</p>})}
//                       </div >
//                     </div>
//                   )
//               })}
//             </ul>
//           </span>
//         </div>
//         {/* <div>
//           Robot is currently <h3>{statusDisplay}</h3>
//         </div> */}
//         <ul className="list">
//           {testData.filter(x => x.name !== undefined).map(x => {
//             //Display appended data
//             return <p key={uuidv4()}>{x.name} | {x.number}</p>
//           })}
//         </ul>
//         <ul className="list">
//           {events.filter(x => x.name !== undefined).map(x => {
//             //Display appended data
//             return <p key={uuidv4()}>{x.name} | {x.message}</p>
//           })}
//         </ul>
//       </div>
//     );
// }

// export default DebugUi;
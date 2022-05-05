import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSocket } from './SocketSingleton';
import update from 'immutability-helper';
import Footer from './Footer';
import { DataGrid } from '@mui/x-data-grid';
import DrTest from './DrTest';
import {Box} from '@mui/material'

const RunView = () =>{
    const theme = createTheme({
        typography: {
            fontWeightLight: "300",
            span:{
                pr: "2rem",
            }
        },
        palette: {
            primary: {
                light: '#757ce8',
                main: '#6200EE',
                dark: '#002884',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        }

    const [events, setEvents] = useState([]);
    const [speed, setSpeed] = useState([]);
    const [voltagePrint, setVoltagePrint] = useState([]);
    const [coils, setCoils] = React.useState([]);
    const [acceleration, setAcceleration] = useState([]);
    const [voltageMotor, setVoltageMotor] = useState([]);
    const [plantData, setPlantData] = useState([]);
    
    const comm = () =>{
        let endpoint = 'http://localhost:5000'
        console.log('env: '+process.env.NODE_ENV)
        if(process.env.NODE_ENV !== 'development'){
            endpoint = window.location.protocol+"//flask-pren.herokuapp.com"
        }
        const socket = getSocket(endpoint);
        socket.on('event', (data) => {
            data = JSON.parse(data)
            setEvents(arr => [...arr, data.data])
        })
        socket.on('speed', (data) => {
            data = JSON.parse(data)
            setSpeed(data.data.message)
        })
        socket.on('voltage_print', (data) => {
            data = JSON.parse(data)
            setVoltagePrint(data.data.message)
        })
        socket.on('coils', (data) => {
            data = JSON.parse(data)
            setCoils(data.data.message)
        })
        socket.on('acceleration', (data) => {
            data = JSON.parse(data)
            setAcceleration(data.data.message)
            })
        socket.on('voltage_motor', (data) => {
            data = JSON.parse(data)
            setVoltageMotor(data.data.message)
        })
        socket.on('plant_data', (data) => {
            data = JSON.parse(data)
            console.log('received plant_data: ', data)
            const index = plantData.findIndex((pd) => pd.position === data.data.message.position);
            console.log('index of plant data position: '+data.data.message.position+' index in array: '+index)
            if (index !== -1){
                const updatePd = update(plantData, {$splice: [[index, 1, data.data.message]]});
                setPlantData(updatePd);}
            else{
                setPlantData(arr =>[...arr, data.data.message])
            }
        })
    }      

    useEffect(()=>{
        comm();
    },[])   

    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },
        { field: 'sensorName', headerName: 'Sensor Name', width: 150 },
        { field: 'sensorData', headerName: 'Sensor Data', width: 150 },
      ];
    
    const rows = [
    { id:"1", sensorName: "speed", sensorData: speed},
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar />
            <main>
                <div style={{ height: 600, width: '50%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={100}
                        rowsPerPageOptions={[]}
                        hideFooter={true}
                        hideFooterPagination={true}
                    />
                </div>
                {/* <DrTest /> */}
            </main>
            <Footer/>
        </ThemeProvider>
    )
}
export default RunView
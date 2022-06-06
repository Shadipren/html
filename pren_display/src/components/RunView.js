import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSocket } from './SocketSingleton';
import update from 'immutability-helper';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Grid } from '@mui/material'
import { FixedSizeList } from 'react-window';
import { PlantCards}  from './PlantCards';

let endpoint = 'http://localhost:5000'
console.log('env: ' + process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'development') {
    endpoint = window.location.protocol + "//flask-pren.herokuapp.com"
}
const socket = getSocket(endpoint);

const RunView = () => {

    const theme = createTheme({
        typography: {
            fontWeightLight: "300",
            align: 'center',
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

    const [events, setEvents] = useState([]);
    const [speed, setSpeed] = useState([]);
    const [voltagePrint, setVoltagePrint] = useState([]);
    const [coil1, setCoil1] = React.useState([]);
    const [coil2, setCoil2] = React.useState([]);
    const [coil3, setCoil3] = React.useState([]);
    const [coil4, setCoil4] = React.useState([]);
    const [accelerationX, setAccelerationX] = useState([]);
    const [accelerationY, setAccelerationY] = useState([]);
    const [accelerationZ, setAccelerationZ] = useState([]);
    const [voltageMotor, setVoltageMotor] = useState([]);
    const [plantData, setPlantData] = useState([]);
    const [matchPosition, setMatchPosition] = useState(-1);

    useEffect(() => {
        socket.on('event', (data) => {
            setEvents(arr => [...arr, data]);
        })
        socket.on('speed', (data) => {
            setSpeed(data);
        })
        socket.on('voltage_print', (data) => {
            setVoltagePrint(data);
        })
        socket.on('timer_start', (data) => {
            console.log('timer started: ', data) 
        })
        socket.on('timer_stop', (data) => {
            console.log('timer stopped: ', data);
        })
        socket.on('present_time', (data) => {
            console.log('time data received: ', data);
        })
        socket.on('coils', (data) => {
            setCoil1(data[0]);
            setCoil2(data[1]);
            setCoil3(data[2]);
            setCoil4(data[3]);
        })
        socket.on('acceleration', (data) => {
            setAccelerationX(data[0]);
            setAccelerationY(data[1]);
            setAccelerationZ(data[2]);
        })
        socket.on('voltage_motor', (data) => {
            setVoltageMotor(data);
        })
        socket.on('plant_data', (data) => {
            console.log('received plant_data: ', data);
            const index = plantData.findIndex((pd) => pd.position === data.position);
            // console.log('index of plant data position: ' + data.position + ' index in array: ' + index);
            if (index !== -1) {
                const updatePd = update(plantData, { $splice: [[index, 1, data]] });
                setPlantData(updatePd);
                console.log('pd after update:', plantData)
            }
            else {
                setPlantData(arr => [...arr, data]);
                console.log('PlantData: ', plantData);
            }
        })
        socket.on('match_found', (data) => {
            console.log("match found at: ",data);
            setMatchPosition(data)
        })
    }, [])

    const columnsSens = [
        { field: 'sensorName', headerName: 'Sensor Name', width: 150 },
        { field: 'sensorData', headerName: 'Sensor Data', flex: 0.3, minWidth: 50 },
    ];

    const rowsSens = [
        { id: "1", sensorName: "Speed", sensorData: speed },
        { id: "2", sensorName: "Voltage Print", sensorData: voltagePrint },
        { id: "3", sensorName: "Voltage Motor", sensorData: voltageMotor },
    ];

    const colAcc = [
        { field: 'axis', headerName: 'Axis', width: 20 },
        { field: 'data', headerName: 'Acceleration Data', flex: 0.3, minWidth: 50 },
    ];

    const rowAcc = [
        { id: "1", axis: accelerationX.axis, data: accelerationX.value },
        { id: "2", axis: accelerationY.axis, data: accelerationY.value },
        { id: "3", axis: accelerationZ.axis, data: accelerationZ.value },
    ];

    const colCoi = [
        { field: 'nrCoil', headerName: '# Coil', width: 150 },
        { field: 'data', headerName: 'Coil Voltage', width: 150 },
    ];

    const rowCoi = [
        { id: "1", nrCoil: coil1.nr_coil, data: coil1.value },
        { id: "2", nrCoil: coil2.nr_coil, data: coil2.value },
        { id: "3", nrCoil: coil3.nr_coil, data: coil3.value },
        { id: "4", nrCoil: coil4.nr_coil, data: coil4.value },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar />
            <main>
                <Box sx={{pt: "10vh", pb: "16px", backgroundColor: "", px: '16px'}}>
                    <Grid container mb={5}>
                        <Grid item xs={12} lg={4}>
                            <DataGrid
                                rows={rowsSens}
                                columns={columnsSens}
                                pageSize={3}
                                rowsPerPageOptions={[]}
                                hideFooter={true}
                                hideFooterPagination={true}
                                autoHeight={true}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <DataGrid
                                rows={rowCoi}
                                columns={colCoi}
                                pageSize={4}
                                rowsPerPageOptions={[]}
                                hideFooter={true}
                                hideFooterPagination={true}
                                autoHeight={true}
                            />
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <DataGrid
                                rows={rowAcc}
                                columns={colAcc}
                                pageSize={3}
                                rowsPerPageOptions={[]}
                                hideFooter={true}
                                hideFooterPagination={true}
                                autoHeight={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid container mb={10}>
                        <PlantCards
                            plantData = {plantData}
                            match = {matchPosition}
                        />
                    </Grid>
                    <FixedSizeList
                        height={200}
                        width='100%'
                        itemSize={30}
                        itemCount={events.length}
                    >
                        {({ index, style }) => {
                            return (
                                <li style={style}>
                                    {events[index].name} | {events[index].message}
                                </li>
                            );
                        }}
                    </FixedSizeList>
                </Box>
            </main>
        </ThemeProvider>
    )
}

export default RunView
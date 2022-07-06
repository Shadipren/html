import React, { useEffect, useState, useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SocketContext } from './Socket';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Grid } from '@mui/material'
import PlantCards  from './PlantCards';
import EventViewer from './EventViewer';
import CoilsTable from './Coils';
import AccelerationTable from './Accel';
import SensorTable from './Sensors';
import Timer from './Timer';

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

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar />
            <main>
                <Box sx={{pt: "10vh", pb: "16px", backgroundColor: "", px: '16px'}}>
                    <Grid container mb={5}>
                        <Grid item xs={18} lg={6}>
                            <SensorTable />
                        </Grid>
                        <Grid item xs={18} lg={6}>
                            <CoilsTable />
                        </Grid>
                    </Grid>
                    <PlantCards/>
                    <Timer/>
                    <EventViewer />
                </Box>
            </main>
        </ThemeProvider>
    )
}

export default RunView
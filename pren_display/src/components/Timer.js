import React, { useEffect, useState, useContext} from 'react';
import { SocketContext } from './Socket';
import { Box } from '@mui/material'

const Timer = () => {
    const socket = useContext(SocketContext);
    const [startTime, setStartTime] = useState(0);
    const [stopTime, setStopTime] = useState(0);
    const [timerStopped, setTimerStopped] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    useEffect(() => {
        socket.emit('request_start_time');

        socket.on('timer_start', (data) => {
            console.log('timer started: ', data) 
            // resetStates();
            setTimerStarted = true;
            setStartTime = data
            
        })
        socket.on('timer_stop', (data) => {
            console.log('timer stopped: ', data);
            setTimerStopped = true;
            setStopTime = data
            
        })
    }, [socket]);
    return (
        <Box mb={6}>
            {(()=>{
                if(timerStopped){
                    return <div>Run finished at {stopTime}</div>
                }
                else if(timerStarted){
                    return <div>Run started at {startTime}</div>
                }
                else{
                    return <div>Currently not Running</div>
                }
            })()}
        </Box>
    )
}

export default Timer;

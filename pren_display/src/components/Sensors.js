import React, { useEffect, useState, useContext} from 'react';
import { SocketContext } from './Socket';
import { DataGrid } from '@mui/x-data-grid';

const SensorTable = () => {
    const socket = useContext(SocketContext);

    const [speed, setSpeed] = useState([]);
    const [voltagePrint, setVoltagePrint] = useState([]);
    const [voltageMotor, setVoltageMotor] = useState([]);

    useEffect(() => {
        socket.on('voltage_motor', (data) => {
            setVoltageMotor(data);
        })
        socket.on('speed', (data) => {
            setSpeed(data);
        })
        socket.on('voltage_print', (data) => {
            setVoltagePrint(data);
        })
    }, [socket]);

    const columnsSens = [
        { field: 'sensorName', headerName: 'Sensor Name', width: 150 },
        { field: 'sensorData', headerName: 'Sensor Data', flex: 0.3, minWidth: 50 },
    ];

    const rowsSens = [
        { id: "1", sensorName: "Speed", sensorData: speed },
        { id: "2", sensorName: "Voltage Print", sensorData: voltagePrint },
        { id: "3", sensorName: "Voltage Motor", sensorData: voltageMotor },
    ];

    return (
        <DataGrid
            rows={rowsSens}
            columns={columnsSens}
            pageSize={3}
            rowsPerPageOptions={[]}
            hideFooter={true}
            hideFooterPagination={true}
            autoHeight={true}
        />
    )
}

export default SensorTable;

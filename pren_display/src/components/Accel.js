import React, { useEffect, useState, useContext} from 'react';
import { SocketContext } from './Socket';
import { DataGrid } from '@mui/x-data-grid';

const AccelerationTable = () => {
    const socket = useContext(SocketContext);

    const [accelerationX, setAccelerationX] = useState([]);
    const [accelerationY, setAccelerationY] = useState([]);
    const [accelerationZ, setAccelerationZ] = useState([]);

    useEffect(() => {
        socket.on('acceleration', (data) => {
            setAccelerationX(data[0]);
            setAccelerationY(data[1]);
            setAccelerationZ(data[2]);
        })
    }, [socket]);

    const colAcc = [
        { field: 'axis', headerName: 'Axis', width: 20 },
        { field: 'data', headerName: 'Acceleration Data', flex: 0.3, minWidth: 50 },
    ];

    const rowAcc = [
        { id: "1", axis: accelerationX.axis, data: accelerationX.value },
        { id: "2", axis: accelerationY.axis, data: accelerationY.value },
        { id: "3", axis: accelerationZ.axis, data: accelerationZ.value },
    ];

    return (
        <DataGrid
            rows={rowAcc}
            columns={colAcc}
            pageSize={3}
            rowsPerPageOptions={[]}
            hideFooter={true}
            hideFooterPagination={true}
            autoHeight={true}
        />
    )
}

export default AccelerationTable;

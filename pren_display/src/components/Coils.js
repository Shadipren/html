import React, { useEffect, useState, useContext} from 'react';
import { SocketContext } from './Socket';
import { DataGrid } from '@mui/x-data-grid';

const CoilsTable = () => {
    const socket = useContext(SocketContext);

    const [coil1, setCoil1] = React.useState([]);
    const [coil2, setCoil2] = React.useState([]);
    const [coil3, setCoil3] = React.useState([]);
    const [coil4, setCoil4] = React.useState([]);

    useEffect(() => {
        socket.on('coils', (data) => {
            setCoil1(data[0]);
            setCoil2(data[1]);
            setCoil3(data[2]);
            setCoil4(data[3]);
        })
    }, [socket]);

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
        <DataGrid
            rows={rowCoi}
            columns={colCoi}
            pageSize={4}
            rowsPerPageOptions={[]}
            hideFooter={true}
            hideFooterPagination={true}
            autoHeight={true}
        />
    )
}

export default CoilsTable;

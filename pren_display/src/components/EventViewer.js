import React, { useEffect, useState, useContext} from 'react';
import { SocketContext } from './Socket';
import { FixedSizeList } from 'react-window';

const EventViewer = () => {
    const socket = useContext(SocketContext);

    const [events, setEvents] = useState([]);

    useEffect(() => {
        socket.on('event', (data) => {
            // console.log("AHAHAHAHH EVENT!!!")
            setEvents(arr => [...arr, data]);
        })
    }, [socket]);

    return (
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
    )
}

export default EventViewer;
import client from "socket.io-client";


var socket = undefined;
var ENDPOINT_CURRENT = undefined;


export const getSocket = (ENDPOINT) => {
    console.log("getting Socket", ENDPOINT);
    if(socket === undefined || ENDPOINT_CURRENT !== ENDPOINT){
        console.log("creating new socket")
        ENDPOINT_CURRENT = ENDPOINT;
        socket = client(ENDPOINT_CURRENT, {transports:['websocket'], secure: true})
    }
    return socket;
}
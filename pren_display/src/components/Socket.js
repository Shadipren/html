import socketio from "socket.io-client";
import React from "react";
import { SOCKET_URL_LOCAL, SOCKET_URL_PROD } from "./config";

export const socketLocal = socketio.connect(SOCKET_URL_LOCAL);
export const socketProd = socketio.connect(SOCKET_URL_PROD)
export const SocketContext = React.createContext();

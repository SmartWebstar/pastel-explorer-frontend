import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import { getBaseURL } from '@utils/helpers/useFetch/useFetch';

export const socket = io(getBaseURL() || '', {
  path: '/socket.io',
  transports: ['websocket', 'polling'],
  secure: true,
  extraHeaders: {
    'custom-origin': document.location.origin,
  },
});

export const SocketContext = createContext<Socket>(socket);

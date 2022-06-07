import React from 'react';
import DebugUi from './components/DebugUi'
import RunView from './components/RunView'
import Footer from './components/Footer'
import './components/Style.css'
import {Box} from '@mui/material'
import {SocketContext, socketLocal, socketProd} from './components/Socket';

const App = () => {
    return (
      <SocketContext.Provider value={(()=>{
        if (process.env.NODE_ENV !== 'development'){
          return socketProd
        }
        else{return socketLocal}
      })()}>
        <Box sx={{height: '120vh', margin:0, display: 'flex', flexDirection: 'column'}}>
            <Box>
              <RunView />
            </Box>
            <Box  sx={{mt: 'auto', bottom: 0}}>
              <Footer/>
            </Box>
        </Box>
      </SocketContext.Provider>
    );
}

export default App;
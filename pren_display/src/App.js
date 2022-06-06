import React from 'react';
import DebugUi from './components/DebugUi'
import RunView from './components/RunView'
import Footer from './components/Footer'
import './components/Style.css'
import {Box} from '@mui/material'

const App = () => {
    return (
      // <DebugUi />
      <Box sx={{height: '120vh', margin:0, display: 'flex', flexDirection: 'column'}}>
          <Box>
            {/* <DebugUi /> */}
            <RunView />
          </Box>
          <Box  sx={{mt: 'auto', bottom: 0}}>
            <Footer/>
          </Box>
      </Box>
      
    );
}

export default App;
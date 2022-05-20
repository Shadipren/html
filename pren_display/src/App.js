import React from 'react';
import DebugUi from './components/DebugUi'
import RunView from './components/RunView'
import Footer from './components/Footer'
import './components/Style.css'
import {Box} from '@mui/material'

const App = () => {

    return (
      // <DebugUi />
      <Box sx={{minheight: '100%', position: 'relative'}}>
        <RunView />
        <Box sx={{mt: 15}}>
          <Footer/>
        </Box>
      </Box>
      
    );
}

export default App;
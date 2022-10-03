import React, { createRef, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import AchivementSnackbar from './components/AchivementSnackbar';
import { Button } from '@mui/material';


function App() {

  const [ openAchivementSnackbar, setOpenAchivementSnackbar ] = React.useState<boolean | undefined>(false)
    
    return (
      <div className="App">
        <Menubar />

        <Button variant="outlined" onClick={ e => setOpenAchivementSnackbar(true) }>
            Open success snackbar
        </Button>

        <AchivementSnackbar handleSnackbar={openAchivementSnackbar} />
      </div>
    );
}

export default App;

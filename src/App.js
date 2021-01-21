import './App.css';
//import Navbar from './components/Navbar';
import AppBar from './components/AppBar';
import Phero from './components/Phero.js';
import * as React from 'react';
import Container from '@material-ui/core/Container';
//import Pherolayout from './components/Pherolayout.js'
///import react from TreeWalker react;
//import react from "react" ;

//import from './components/Pherolayout';

function App() {
  return (
    <div>
      <React.Fragment>
      <AppBar/>
      <Container>
      <Phero/>

      </Container>
      </React.Fragment>
        
    </div>
    
  );
}

export default App;

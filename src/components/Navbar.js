import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
//import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
//

//import Container from '@material-ui/core/Container'
//import {AppBar, MuiAppbar} from '@material-ui/core/Appbar';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
      color: theme.palette.common.white,
    },
  });
  
  function Navbar(props) {
    return <MuiAppBar elevation={0} position="fixed" {...props} />;
  }
  
  export default withStyles(styles)(Navbar);
  
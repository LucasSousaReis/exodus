import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Button';
import Typography from './Typography';
import Pherolayout from './Pherolayout';
import logo from '../figs/logo.jpg';
const backgroundImage = logo;
  //  '/components/figs/logo.jpg';
  //const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

function styles(theme) {
    return ({
        background: {
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9',
            backgroundPosition: 'center',
        },
        button: {
            minWidth: 200,
        },
        h5: {
            marginBottom: theme.spacing(4),
            marginTop: theme.spacing(4),
            [theme.breakpoints.up('sm')]: {
                marginTop: theme.spacing(10),
            },
        },
        more: {
            marginTop: theme.spacing(2),
        },
    });
}

function Phero(props) {
  const { classes } = props;

  return (
    <Pherolayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Slow Fashion Creative Brand
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Ideas crafted with love
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/premium-themes/onepirate/sign-up/"
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </Pherolayout>
  );
}

Phero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Phero);

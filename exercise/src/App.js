import React, { Component } from 'react';
import Dashboard from './components/dashboard';


import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    width: '100%',
  }
});

class AppBase extends Component {

  render() {
        const { classes } = this.props;

    return (
        <div className="container-fluid">
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                  <Toolbar>
                    <Typography type="title" color="inherit">
                      App Dashboard
                    </Typography>
                  </Toolbar>
                </AppBar>
            </div>
            <div >
                <Dashboard/>
            </div>
        </div>
    );
  }
}


export const App = withStyles(styles)(AppBase);

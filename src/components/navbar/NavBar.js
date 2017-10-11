import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

const NavBar = () => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Typography type="title" color="inherit">
          Drinkorize
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

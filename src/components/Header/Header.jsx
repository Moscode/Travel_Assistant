import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './HeaderStyles';

function Header() {
    const classes = useStyles();

    return ( 
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' noWrap className={classes.title}>
            Travel Assistant
          </Typography>
          <Box display='flex'>
              <Typography variant='h6' className={classes.title}>
                Explore new locations
              </Typography>
              <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{
                  root:classes.inputRoot,
                  input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search'}}
              />
          </div>
          </Box>
         
        </Toolbar>
      </AppBar>
    </div>
     );
}

export default Header;

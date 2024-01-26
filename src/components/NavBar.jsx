import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function NavBar() {
  return (

    <div>
        <div>
    <Box  sx={{ flexGrow: 1, width: 1900 }}> 
      <AppBar  position="static"> 
        <Toolbar className="NavBar"  >
          <IconButton 
            size="large"
            edge="start"
            color="Black"
            aria-label="menu"
            sx={{ mr: 9 }}
          > 
            <MenuIcon /> &nbsp; &nbsp; All Sections
          </IconButton>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1000 }}>
            
          </Typography >
          <Button color="inherit" sx={{ width: 100, backgroundColor: '#1e88e5' }}>Login</Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          <Button color="inherit" sx={{ width: 100, backgroundColor: '#1e88e5' }}>SignUp</Button>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
   

    </div>
  );
}
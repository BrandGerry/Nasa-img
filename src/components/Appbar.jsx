import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NasaIcon from '../assets/img/NasaIcon.svg'

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#0B3D91"}}>
        <Toolbar>
            <img src={NasaIcon} alt="Icono"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:"10px" }}>
            Nasa Imagenes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
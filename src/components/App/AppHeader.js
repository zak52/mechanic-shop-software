import React, { useState } from 'react';

// importing material UI components
import './App.css';
import { AppBar, Box, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import { DiAptana } from "react-icons/di";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Navigation/Sidebar';


export default function AppHeader() {


    return (
        <AppBar className='appBar' position="static">
            <Toolbar className='toolBar'>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label='menu'
                    sx={{ mr: 2 }}
                > 
                </IconButton>
                <Typography  variant='h6'
                 component="div" sx= {{ flexGrow: 1 }}>
                    Mechanic AutoShop Software
                 </Typography>
                 <div className= 'toolbarButtons'>
                 <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label='setting'
                    sx={{ 
                        mr: 10 }}
                    >
                    <DiAptana />
                </IconButton>
                 </div>
            </Toolbar>
        </AppBar>
    )
}
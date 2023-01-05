import React, { useState } from 'react';

// importing material UI components
import './App.css';
import { AppBar, Box, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import { DiAptana } from "react-icons/di";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../Navigation/Sidebar';


export default function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);

    function handleMenuToggle() {
        setShowMenu(!showMenu);
    }

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
                 <div className='header-search-container'
                    size="large"
                    edge="end"
                    color="inherit"
                    sx={{ 
                        mr: 10 }}
                    >
                    <input type="text" className="header-search" placeholder="Search...">
                    </input>
                    <button className='add-button'  onClick={handleMenuToggle}>+</button>
                    {showMenu && (
                        <div className='header-dropdown'>
                            <div className='header-dropdown-option'>
                                New Customer
                            </div>
                            <div className='header-dropdown-option'>
                                New Booking
                            </div>
                            <div className='header-dropdown-option'>
                                New Job
                            </div>
                        </div>
                    )

                    }
                 </div>
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
import React, { useState } from 'react';
import "./Dashboard.css";
import { Button } from '@material-ui/core';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeRepairServiceSharpIcon from '@mui/icons-material/HomeRepairServiceSharp';
import { ActivityFeedTable } from '../ActivityFeedTable/ActivityFeedTable';

export default function Dashboard() {

    const [isActive, setActive] = useState(true)
    
    const toggleClass = () => {
        setActive(!isActive)
    }

    return(
        <div className='Container'>
            <div className='row'>
                <div className="toggleButton">
                    <Button className={isActive ? 'saleButton, active' : 'saleButton'}
                    onClick={toggleClass}
                    >
                        Sales
                    </Button>
                    <Button className={isActive ? 'inspectionButton' : 'inspectionButton, active'}
                    onClick={toggleClass}
                    >
                        Inspections
                    </Button>
                </div>
                <div className='col'>
                <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <AttachMoneyIcon/>
                            </div>
                            <div id="title">
                                Today Sales
                            </div>
                        </div>
                        <div id="amount">
                            $0.00
                        </div>
                    </div>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <HomeRepairServiceSharpIcon/>
                            </div>
                            <div id="title">
                                Open Jobs
                            </div>
                        </div>
                        <div id="amount">
                           0
                        </div>
                    </div>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <SupportAgentIcon/>
                            </div>
                            <div id="title">
                                Returning Customers
                            </div>
                        </div>
                        <div id="amount">
                           0
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <AttachMoneyIcon/>
                            </div>
                            <div id="title">
                                Past Week Sales
                            </div>
                        </div>
                        <div id="amount">
                            $0.00
                        </div>
                    </div>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <CalendarMonthIcon/>
                            </div>
                            <div id="title">
                                Today Bookings
                            </div>
                        </div>
                        <div id="amount">
                           0
                        </div>
                    </div>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <HomeRepairServiceSharpIcon/>
                            </div>
                            <div id="title">
                                Service Reminder
                            </div>
                        </div>
                        <div id="amount">
                           0
                        </div>
                    </div>
                </div>
                <div className='col'>
                <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <AttachMoneyIcon/>
                            </div>
                            <div id="title">
                                Past Month Sales
                            </div>
                        </div>
                        <div id="amount">
                            $0.00
                        </div>
                    </div>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <AttachMoneyIcon/>
                            </div>
                            <div id="title">
                                Gross Month Sales
                            </div>
                        </div>
                        <div id="amount">
                            $0.00
                        </div>
                    </div>
                    <div className='dashboardBoxes'>
                        <div className='titleAndIcon'>
                            <div id="icon">
                                <SupportAgentIcon/>
                            </div>
                            <div id="title">
                                New Customers
                            </div>
                        </div>
                        <div id="amount">
                           0
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottomrow'>
                <h3>Activity Feed:</h3>
                <div>
                    <ActivityFeedTable/>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
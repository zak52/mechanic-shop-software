import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkIcon from '@mui/icons-material/Work';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BadgeIcon from '@mui/icons-material/Badge';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/"
    },
    {
        title: "Booking",
        icon: <CalendarMonthIcon/>,
        link: "/booking"
    },
    {
        title: "Jobs",
        icon: <WorkIcon/>,
        link: "/jobs"
    },
    {
        title: "Inspections",
        icon: <CheckBoxIcon/>,
        link: "/inspections"
    },
    {
        title: "Customers",
        icon: <SupportAgentIcon/>,
        link: "/customers"
    },
    {
        title: "Cars",
        icon: <DirectionsCarIcon/>,
        link: "/cars"
    },
    {
        title: "Reports",
        icon: <AssessmentIcon/>,
        link: "/reports"
    },
    {
        title: "Employees",
        icon: <BadgeIcon/>,
        link: "/employees"
    }

]
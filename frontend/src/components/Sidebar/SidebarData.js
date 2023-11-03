import React from "react";
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        path: "/Home"
    },
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        path:"/Dashboard"
    },
    {
        title:"History",
        icon:<HistoryIcon/>,
        path:"/History"
    }
];

export const SidebarData2 = [
    {
        title:"Login",
        icon:<LoginIcon/>,
        path:"/Login"
    },
    {
        title:"Logout",
        icon:<LogoutIcon/>,
        path:"/Logout"
    }
];
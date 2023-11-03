import { NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import "./Sidebar.css";
import "./SidebarList.css";
import { SidebarData, SidebarData2 } from "./SidebarData";
import HomeComponent from "../HomeComponent";
import History from "../History/History";
import DashboardComponent from "../Dashboard/DashboardComponent";
import Login from "../Login/Login"; 
import Logout from "../Login/Logout"; 
function Sidebar(){
    return( 
    <>
        <Routes>
            <Route path="/Home" element={<HomeComponent />} />
            <Route path="/Dashboard" element={<DashboardComponent />}/>
            <Route path="/History" element={<History />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/Logout" element={<Logout />}/>
        </Routes>
        <div className="Sidebar">
            <ul className="SidebarList">
            <div className="Title">Record Count</div>
                {SidebarData.map((val,key)=>{
                    return(
                        <li key={key}>
                            <NavLink to={val.path} className={({isactive})=>["row", isactive ? "active" : null].join("")}>
                                <div id="icon">{val.icon}</div> <div id ="title">{val.title}</div>
                            </NavLink>
                        </li>
                    )
                })}
                <div className="BottomTabs">
                {SidebarData2.map((val,key)=>{
                    return(
                        <li key={key}>
                            <NavLink to={val.path} className={({isactive})=>["rowBottom", isactive ? "active" : null].join("")}>
                                <div id="icon">{val.icon}</div> <div id ="title">{val.title}</div>
                            </NavLink>
                        </li>
                    )
                })}
                </div>
            </ul>
        </div>
    </>
  )
}

export default Sidebar;


import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
export default function Employee (){
    return(
        <div style={{gridTemplateColumns:"300px 1fr",gridTemplateRows:"80px 1fr"}} className='grid g h-screen '>
            <NavBar />
            <SideBar />
            <EmployeeTable />
        </div>
    )
}
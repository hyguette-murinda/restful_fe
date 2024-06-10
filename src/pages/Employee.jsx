import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import SideBar from "../components/SideBar";
export default function Employee (){
    return(
        <div style={{gridTemplateColumns:"300px 1fr",gridTemplateRows:"80px 1fr"}} className='grid g h-screen '>
            <SideBar />
            <EmployeeTable />
        </div>
    )
}
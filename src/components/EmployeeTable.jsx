import React from "react";
import TableContent from "./TableContent";
import AddModal from "./Modal";
const EmployeeTable =() =>{
    return(
        <div>
            <div className="flex justify-between m-4">
                <h2>Employees table</h2>
                <AddModal />
            </div>
            <div>
                <TableContent />
            </div>
        </div>
    )
}
export default EmployeeTable
import React, { useEffect, useState } from "react";
import EmployeeTable from "../components/EmployeeTable";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { api } from "../api/api";
export default function Employee() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const onSearch = (query) => {
        console.log('query', query);
        if (query === '') {
            setFiltered(data);
            return;
        }
        const filtered = data.filter((item) => {
            const toSearch = Object.values(item).join('');
            return toSearch.toLowerCase().includes(query.toLowerCase());
        })
        setFiltered(filtered);
    }

    const getAllEmployees = async () => {
        try {
            const response = await api.get('http://localhost:5000/api/v1/laptop/all');
            console.log("API response:", response.data);

            const employees = response.data.data; // Adjust this if necessary
            if (Array.isArray(employees)) {
                setData(employees);
                setFiltered(employees);
            } else {
                console.error("Expected an array but got:", employees);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getAllEmployees();
    }, []);
    return (
        <div className='h-screen flex w-full overflow-y-auto '>
            <SideBar />
            <div className="flex flex-col w-full">
                <NavBar onSearch={onSearch} />
                <EmployeeTable data={filtered} />
            </div>
        </div>
    )
}
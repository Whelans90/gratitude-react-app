import './App.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './components/inc/NavbarHeader';
import EmployeeTable from './components/pages/EmployeeTable';
import { Outlet } from "react-router-dom";
import { getEmployees } from './components/pages/Employees';



function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8080/api/employees")
      .then(response => response.json())
      .then(data =>  setEmployees(data))
    
    
  }, []);

  

  return (
    
    <div>
      <NavbarHeader/>
      <EmployeeTable employees={employees} />
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;


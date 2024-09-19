
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeForm from './EmployeeForm';
import EmployeeTable from './EmployeeTable';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
    const response = await axios.get('https://employeemanagementserver-az48.onrender.com/employees');
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://employeemanagementserver-az48.onrender.com/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>
      <h1 className='text-center fw-bolder text-success'>Employee Management</h1>
      <EmployeeForm selectedEmployee={selectedEmployee} setSelectedEmployee={setSelectedEmployee} fetchEmployees={fetchEmployees} />
      <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;


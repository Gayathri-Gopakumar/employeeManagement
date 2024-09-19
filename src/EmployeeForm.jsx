import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


const EmployeeForm = ({ selectedEmployee, setSelectedEmployee, fetchEmployees }) => {
  const [employeeData, setEmployeeData] = useState({
    username: '',
    email: '',
    status: 'active',
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployeeData(selectedEmployee);
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedEmployee) {
      await axios.put(`https://employeemanagementserver-az48.onrender.com/employees/${selectedEmployee.id}`, employeeData);
    } else {
      await axios.post('https://employeemanagementserver-az48.onrender.com/employees', employeeData);
    }
    fetchEmployees();
    setSelectedEmployee(null);
    setEmployeeData({ username: '', email: '', status: 'active' });
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-row justify-content-evenly align-items-center m-5'>
      <input
        type="text"
        name="username"
        value={employeeData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={employeeData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <select name="status" value={employeeData.status} onChange={handleChange}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <Button type="submit" variant='warning'>{selectedEmployee ? 'Update Employee' : 'Add Employee'}</Button>
    </form>
  );
};

export default EmployeeForm;

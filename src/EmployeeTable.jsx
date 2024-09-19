import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length > 0 && (
            employees.map((employee) => (
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.username}</td>
                <td>{employee.email}</td>
                <td>{employee.status}</td>

                <td>
                <Button onClick={() => onEdit(employee)} variant="info" className='me-3'>
                    Edit
                </Button>
                <Button onClick={() => onDelete(employee.id)} variant="danger">
                    Delete
                </Button>
                </td>
            </tr>
            ))
        ) }
    </tbody>


    </Table>
  );
};

export default EmployeeTable;

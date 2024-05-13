import React from 'react';
import { Link } from 'react-router-dom';
import { useEmployees } from './useEmployees';
import DataLoading from '../../UI/DataLoading';
import { useDeleteEmployee } from './useDeleteEmployee';

const Employees = () => {
  const { employees, isLoading } = useEmployees();
  const { delete: deleteEmployee } = useDeleteEmployee();
  if (isLoading) return <DataLoading />;
  return (
    <div>
      <Link to='/employees/create' className='btn btn-primary mb-5'>
        Create
      </Link>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee._id}>
                <th>{index + 1}</th>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>

                <td>
                  <Link
                    to={`/employees/edit/${employee._id}`}
                    className='btn btn-primary btn-sm'
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure?')) {
                        deleteEmployee(employee._id);
                      }
                    }}
                    className='btn btn-error btn-sm'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;

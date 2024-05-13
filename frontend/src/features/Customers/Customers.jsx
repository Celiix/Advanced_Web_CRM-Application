import React from 'react';
import { Link } from 'react-router-dom';
import { useCustomers } from './useCustomers';
import DataLoading from '../../UI/DataLoading';
import { useDeleteCustomers } from './useDeleteCustomer';

const Customers = () => {
  const { customers, isLoading } = useCustomers();
  const { delete: deleteCustomer } = useDeleteCustomers();
  if (isLoading) return <DataLoading />;
  return (
    <div>
      <Link to='/customers/create' className='btn btn-primary mb-5'>
        Create
      </Link>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.id}>
                <th>{index + 1}</th>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>
                  <Link
                    to={`/customers/edit-customer/${customer._id}`}
                    className='btn btn-primary btn-sm'
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure?')) {
                        deleteCustomer(customer._id);
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

export default Customers;

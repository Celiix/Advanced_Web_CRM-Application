import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from './useContacts';
import DataLoading from '../../UI/DataLoading';
// import { useDeleteContact } from './useDeleteContact';

const Contacts = () => {
  const { contacts, isLoading } = useContacts();
  // const { delete: deleteContact } = useDeleteContact();
  if (isLoading) return <DataLoading />;
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th></th>
              <th>Customer id</th>
              <th>Product id</th>
              <th>Type</th>
              <th>Query</th>
              <th>State</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                <th>{index + 1}</th>
                <td>{contact.customer}</td>
                <td>{contact.product}</td>
                <td>{contact.type}</td>
                <td>{contact.query}</td>
                <td>{contact.state}</td>

                <td>
                  <Link
                    to={`/Contacts/edit/${contact._id}`}
                    className='btn btn-primary btn-sm'
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;

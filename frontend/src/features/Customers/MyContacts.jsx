import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useMyContacts } from './useMyContacts';
import authAtom from '../../atoms/authAtom';
import DataLoading from '../../UI/DataLoading';

const MyContacts = () => {
  const { user } = useRecoilValue(authAtom);
  const { contacts, isLoading } = useMyContacts(user._id);
  if (isLoading) return <DataLoading />;
  return (
    <div>
      <h1 className='mb-10 text-2xl font-bold'>My Contacts</h1>
      <Link to='/contacts/create' className='btn btn-primary'>
        Create
      </Link>
      <div>
        <table className='table table-zebra'>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Type</th>
              <th>Query</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.product}</td>
                <td>{contact.type}</td>
                <td>{contact.query}</td>
                <td>{contact.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContacts;

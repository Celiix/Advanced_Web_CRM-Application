import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import authAtom from '../../atoms/authAtom';
import Stats from './Stats';
import MyContacts from '../Customers/MyContacts';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const { userType, user } = useRecoilValue(authAtom);
  useEffect(() => {
    if (user?.role !== 'admin') navigate('/contacts');
  }, [user, navigate]);
  return <>{userType === 'customer' ? <MyContacts /> : <Stats />}</>;
};

export default Dashboard;

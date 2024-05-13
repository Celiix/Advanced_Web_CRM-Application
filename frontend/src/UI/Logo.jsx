import React from 'react';
import { Link } from 'react-router-dom';
import useCompany from '../features/company/useCompany';

const Logo = () => {
  const { data } = useCompany();

  if (data?.logo)
    return (
      <Link to='/' className='btn btn-ghost text-xl'>
        <img className='w-16 h-16' src={data?.logo} alt='logo' />
      </Link>
    );
  return null;
};

export default Logo;

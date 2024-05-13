import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      className=' fixed w-screen h-screen top-0 left-0 
    z-10 flex justify-center items-center gap-3 flex-col'
    >
      <h1 className='text-4xl text-center font-bold'>Page Not Found 404</h1>
      <Link to='/' className='btn btn-lg btn-primary'>
        Home
      </Link>
    </div>
  );
};

export default NotFound;

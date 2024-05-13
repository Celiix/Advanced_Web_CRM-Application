import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useLogout } from '../features/Auth/useLogout';
import { useRecoilValue } from 'recoil';
import authAtom from '../atoms/authAtom';

const Navbar = () => {
  const { userType, user } = useRecoilValue(authAtom);
  const role = user?.role;
  const { logout } = useLogout();
  return (
    <div className='navbar bg-base-200'>
      <div className='container mx-auto flex justify-between'>
        <div className=' navbar'>
          <div className='navbar-start'>
            <details className='dropdown'>
              <summary className='m-1 btn lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </summary>
              {userType !== 'customer' && (
                <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                  <li>
                    <Link to='/products'>Products</Link>
                  </li>
                  <li>
                    <Link to='/customers'>Customers</Link>
                  </li>
                  <li>
                    <Link to='/employees'>Employees</Link>
                  </li>
                  <li>
                    <Link to='/contacts'>Contact Logs</Link>
                  </li>
                </ul>
              )}
            </details>

            <Logo />
          </div>
          {userType !== 'customer' && (
            <div className='navbar-center hidden lg:flex'>
              <ul className='menu menu-horizontal px-1'>
                {role === 'admin' && (
                  <>
                    <li>
                      <Link to='/products'>Products</Link>
                    </li>
                    <li>
                      <Link to='/customers'>Customers</Link>
                    </li>
                    <li>
                      <Link to='/employees'>Employees</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to='/contacts'>Contact Logs</Link>
                </li>
              </ul>
            </div>
          )}

          <div className='navbar-end ml-auto'>
            <button onClick={logout} className='btn btn-primary'>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

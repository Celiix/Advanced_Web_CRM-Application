import React from 'react';
import {
  HiOutlineUsers,
  HiOutlineUser,
  HiOutlineChatBubbleBottomCenter,
  HiOutlineHeart,
  HiOutlineArrowRight,
} from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useStats } from './useStats';

const Stats = () => {
  const { isLoading, data } = useStats();
  const { totalProducts, totalEmployees, totalContacts, totalCustomers } =
    data || {};
  if (isLoading)
    return <span className='loading loading-spinner loading-lg'></span>;

  return (
    <div className='flex justify-center items-center'>
      <div className='stats shadow'>
        <div className='stat'>
          <div className='stat-figure text-primary'>
            <HiOutlineHeart size={30} />
          </div>
          <div className='stat-title'>Total Products</div>
          <div className='stat-value text-primary'>{totalProducts}</div>
          <div className='stat-desc'>
            <Link to='/products' className='flex items-center gap-2'>
              All products <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <HiOutlineUser size={30} />
          </div>
          <div className='stat-title'>Total Employees</div>
          <div className='stat-value text-secondary'>{totalEmployees}</div>
          <div className='stat-desc'>
            {' '}
            <Link to='/employees' className='flex items-center gap-2'>
              All Employees <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <HiOutlineUsers size={30} />
          </div>
          <div className='stat-title'>Total customer</div>
          <div className='stat-value text-accent'>{totalCustomers}</div>
          <div className='stat-desc'>
            <Link to='/customers' className='flex items-center gap-2'>
              All customers <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <HiOutlineChatBubbleBottomCenter size={30} />
          </div>
          <div className='stat-title'>Contact logs</div>
          <div className='stat-value text-accent'>{totalContacts}</div>
          <div className='stat-desc'>
            <Link to='/customers' className='flex items-center gap-2'>
              All Logs <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

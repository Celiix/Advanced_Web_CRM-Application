import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import authAtom from '../../atoms/authAtom';
import { useLogin } from './useLogin';
const Auth = () => {
  const [auth, setAuth] = useRecoilState(authAtom);
  const { register, handleSubmit } = useForm();
  const { login, isLoading } = useLogin();
  useEffect(() => {
    const localType = localStorage.getItem('userType') || 'user';
    setAuth((prevS) => ({ ...prevS, userType: localType }));
  }, [setAuth]);
  const onChangeUserType = (type) => {
    localStorage.setItem('userType', type);
    setAuth((prevS) => ({ ...prevS, userType: type }));
  };
  const onSubmit = (data) => {
    login(data);
  };
  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
      <div className='card bg-base-200 max-w-[95%] md:w-[500px]'>
        <div role='tablist' className='tabs tabs-boxed'>
          <button
            onClick={() => onChangeUserType('user')}
            role='tab'
            className={`tab ${auth.userType === 'user' && 'tab-active'}`}
          >
            As a employee
          </button>
          <button
            onClick={() => onChangeUserType('customer')}
            role='tab'
            className={`tab ${auth.userType === 'customer' && 'tab-active'}`}
          >
            As a customer
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=' card-body'>
          <h1 className='card-title'>Login</h1>
          <div className='form-control'>
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='email'
              className='input input-primary w-full'
              placeholder='Email'
              {...register('email', {
                required: 'email is required',
              })}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='password' className='label'>
              Password
            </label>
            <input
              type='password'
              className='input input-primary w-full'
              placeholder='Password'
              {...register('password', {
                required: 'password is required',
              })}
            />
          </div>
          <button disabled={isLoading} className='btn btn-primary w-full my-10'>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

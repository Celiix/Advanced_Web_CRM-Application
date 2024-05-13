import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateEmployee } from './useCreateEmployee';

const CreateCustomer = () => {
  const { create, isLoading } = useCreateEmployee();
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    create(data);
  };
  return (
    <form className='max-w-full md:w-[500px]' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-control'>
        <label htmlFor='name' className='label'>
          Name
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('name', {
            required: 'Name is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='email' className='label'>
          email
        </label>
        <input
          type='email'
          className='input input-primary w-full'
          {...register('email', {
            required: 'email is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='role' className='label'>
          Role
        </label>
        <select
          {...register('role', {
            required: 'role is required',
          })}
          className=' select select-primary'
        >
          <option value=''>Select</option>
          <option value='salesman'>Salsman</option>
          <option value='marketer'>Marketer</option>
        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='password' className='label'>
          password
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('password', {
            required: 'password is required',
          })}
        />
      </div>
      <button
        disabled={isLoading}
        type='submit'
        className='btn btn-primary w-full my-10'
      >
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default CreateCustomer;

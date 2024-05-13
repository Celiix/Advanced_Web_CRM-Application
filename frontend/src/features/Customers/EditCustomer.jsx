import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useEditCustomers } from './useEditCustomer';
import { useRecoilValue } from 'recoil';
import authAtom from '../../atoms/authAtom';
import { useParams } from 'react-router-dom';
import { useGetCustomer } from './useGetCustomer';

const EditCustomer = () => {
  const params = useParams();
  const id = params.id;
  const { customer, isLoading } = useGetCustomer(params.id);
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: customer,
  });
  const { update, isLoading: updating } = useEditCustomers();
  useEffect(() => {
    if (customer && !isLoading) {
      Object.keys(customer).forEach((key) => {
        setValue(key, customer[key]);
      });
    }
  }, [isLoading, customer, setValue]);
  const onSubmit = (data) => {
    update({ id, body: data });
  };
  if (isLoading) return <h3>Loading...</h3>;
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
        <label htmlFor='phone' className='label'>
          phone
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('phone', {
            required: 'phone is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='address' className='label'>
          address
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('address', {
            required: 'address is required',
          })}
        />
      </div>

      <button
        disabled={updating}
        type='submit'
        className='btn btn-primary w-full my-10'
      >
        {updating ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default EditCustomer;

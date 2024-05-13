import React from 'react';
import { useProducts } from '../Products/useProducts';
import DataLoading from '../../UI/DataLoading';
import { useForm } from 'react-hook-form';
import { useCreateContactLog } from './useCreateContact';
import { useRecoilValue } from 'recoil';
import authAtom from '../../atoms/authAtom';

export const CreateContact = () => {
  const { register, handleSubmit } = useForm();
  const { products, isLoading } = useProducts();
  const { user } = useRecoilValue(authAtom);
  const { create, isLoading: creating } = useCreateContactLog();

  const onSubmit = (data) => {
    const body = { ...data, customer: user._id };
    console.log(body);
    create(body);
  };

  if (isLoading) return <DataLoading />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[500px]'>
      <div className='form-control'>
        <label className='label'>Product</label>
        <select
          {...register('product', {
            required: 'Product is required',
          })}
          className=' select select-primary'
        >
          <option value=''>Select</option>
          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className='form-control'>
        <label className='label'>Type</label>
        <select
          {...register('type', {
            required: 'Type is required',
          })}
          className=' select select-primary'
        >
          <option value=''>Select</option>
          <option value='initial'>Initial</option>
          <option value='sales'>Sales</option>
          <option value='support'>Support</option>
          <option value='referrals'>Referrals</option>
        </select>
      </div>
      <div className='form-control'>
        <label className='label'>Query</label>
        <textarea
          {...register('query', {
            required: 'Query is required',
          })}
          className=' textarea textarea-primary'
        />
      </div>
      <button disabled={creating} className='btn btn-primary mt-10'>
        {creating ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default CreateContact;

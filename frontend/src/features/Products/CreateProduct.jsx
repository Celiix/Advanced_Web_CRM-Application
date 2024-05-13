import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateProducts } from './useCreateProduct';
import { useRecoilValue } from 'recoil';
import authAtom from '../../atoms/authAtom';

const CreateProduct = () => {
  const { user } = useRecoilValue(authAtom);
  const { create, isLoading } = useCreateProducts();
  const { handleSubmit, register } = useForm();
  console.log(user);
  const onSubmit = (data) => {
    console.log(data);
    const body = { ...data, user: user._id };
    create(body);
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
        <label htmlFor='price' className='label'>
          Price
        </label>
        <input
          type='number'
          className='input input-primary w-full'
          {...register('price', {
            required: 'Price is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='description' className='label'>
          Description
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('description', {
            required: 'Description is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='image' className='label'>
          Image
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('image', {
            required: 'Image is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='category' className='label'>
          Category
        </label>
        <input
          type='text'
          className='input input-primary w-full'
          {...register('category', {
            required: 'Category is required',
          })}
        />
      </div>
      <div className='form-control'>
        <label htmlFor='stock' className='label'>
          Stock
        </label>
        <input
          type='number'
          className='input input-primary w-full'
          {...register('stock', {
            required: 'Stock is required',
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

export default CreateProduct;

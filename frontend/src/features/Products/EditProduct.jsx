import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useEditProducts } from './useEditProduct';
import { useRecoilValue } from 'recoil';
import authAtom from '../../atoms/authAtom';
import { useParams } from 'react-router-dom';
import { useGetProduct } from './useGetProduct';

const EditProduct = () => {
  const params = useParams();
  const id = params.id;
  const { product, isLoading } = useGetProduct(params.id);
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: product,
  });
  const { update, isLoading: updating } = useEditProducts();
  useEffect(() => {
    if (product && !isLoading) {
      Object.keys(product).forEach((key) => {
        setValue(key, product[key]);
      });
    }
  }, [isLoading, product, setValue]);
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
        disabled={updating}
        type='submit'
        className='btn btn-primary w-full my-10'
      >
        {updating ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default EditProduct;

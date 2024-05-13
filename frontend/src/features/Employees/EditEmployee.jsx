import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useEditEmployee } from './useEditEmployee';
import { useParams } from 'react-router-dom';
import { useGetEmployee } from './useGetEmployee';

const EditEmployee = () => {
  const params = useParams();
  const id = params.id;
  const { employee, isLoading } = useGetEmployee(params.id);
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: employee,
  });
  const { update, isLoading: updating } = useEditEmployee();
  useEffect(() => {
    if (employee && !isLoading) {
      Object.keys(employee).forEach((key) => {
        setValue(key, employee[key]);
      });
    }
  }, [isLoading, employee, setValue]);
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
      {/* <div className='form-control'>
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
      </div> */}

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

export default EditEmployee;

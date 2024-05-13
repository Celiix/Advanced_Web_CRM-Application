import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useEditContact } from './useEditContact';
import { useParams } from 'react-router-dom';
import { useGetContact } from './useGetContact';

const EditEmployee = () => {
  const params = useParams();
  const id = params.id;
  const { employee, isLoading } = useGetContact(params.id);
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: employee,
  });
  const { update, isLoading: updating } = useEditContact();
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
        <label className='label'>State</label>
        <select
          {...register('state', {
            required: 'state is required',
          })}
          className=' select select-primary'
        >
          <option value=''>Select</option>
          <option value='initialized'>initialized</option>
          <option value='progress'>progress</option>
          <option value='completed'>completed</option>
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

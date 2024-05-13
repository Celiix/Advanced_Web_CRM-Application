import { useForm } from 'react-hook-form';
import useCompany from '../features/company/useCompany';
import useCreateCompany from '../features/company/useCreateCompany';
import { useNavigate } from 'react-router-dom';

const CreateCompany = () => {
  const navigate = useNavigate();
  const { data, isLoading: gettingCompany } = useCompany();
  const { createCompany, isLoading: creating } = useCreateCompany();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    createCompany(data);
  };
  if (gettingCompany) return <h1 className=' text-2xl'>Loading...</h1>;
  if (!gettingCompany && data.length) return navigate('/');
  return (
    <div className=' min-w-screen min-h-screen flex justify-center items-center'>
      <div className='card bg-base-200 max-w-[95%] md:w-[500px] my-10'>
        <div className=' card-body'>
          <h1 className='card-title'>Create a new Company</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' form-control'>
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
            <div className=' form-control'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <input
                type='email'
                className='input input-primary w-full'
                {...register('email', {
                  required: 'email is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='phone' className='label'>
                Phone
              </label>
              <input
                type='number'
                className='input input-primary w-full'
                {...register('phone', {
                  required: 'phone is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='address' className='label'>
                Address
              </label>
              <input
                type='text'
                className='input input-primary w-full'
                {...register('address', {
                  required: 'Address is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='city' className='label'>
                City
              </label>
              <input
                type='text'
                className='input input-primary w-full'
                {...register('city', {
                  required: 'City is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='state' className='label'>
                State
              </label>
              <input
                type='text'
                className='input input-primary w-full'
                {...register('state', {
                  required: 'State is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='country' className='label'>
                Country
              </label>
              <input
                type='text'
                className='input input-primary w-full'
                {...register('country', {
                  required: 'Country is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='website' className='label'>
                Website
              </label>
              <input
                type='text'
                className='input input-primary w-full'
                {...register('website', {
                  required: 'Website is required',
                })}
              />
            </div>
            <div className=' form-control'>
              <label htmlFor='logo' className='label'>
                Logo
              </label>
              <input
                type='text'
                className='input input-primary w-full'
                {...register('logo', {
                  required: 'Logo is required',
                })}
              />
            </div>
            <button
              disabled={creating}
              type='submit'
              className='btn btn-primary w-full my-10'
            >
              {creating ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;

import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useNavigate } from 'react-router-dom';
import useCompany from '../features/company/useCompany';
import { useGetMe } from '../features/Auth/useGetMe';
import DataLoading from '../UI/DataLoading';

const AppLayout = () => {
  const navigate = useNavigate();
  const { data, isLoading: gettingCompany } = useCompany();
  const { data: user, isLoading: gettingMe } = useGetMe();
  const isLoading = gettingCompany || gettingMe;

  if (isLoading) return <DataLoading />;
  console.log(user);
  if (!gettingCompany && !data?._id) return navigate('/create-company');
  if (!gettingMe && !user) return navigate('/auth');

  return (
    <div className='flex flex-col min-h-screen max-h-screen'>
      <Navbar />
      <main className='flex-1'>
        <div className='container mx-auto my-10'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;

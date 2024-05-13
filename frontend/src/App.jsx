import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Dashboard from './pages/Dashboard';
import AppLayout from './UI/AppLayout';
import NotFound from './pages/404';
import CreateCompany from './pages/CreateCompany';
import Products from './pages/Products';
import CreateProduct from './pages/CreateProduct';
import Auth from './pages/Auth';
import EditProduct from './pages/EditProduct';
import Customers from './pages/Customers';
import CreateCustomer from './pages/CreateCustomer';
import Contacts from './pages/Contacts';
import EditContact from './pages/EditContact';
import CreateContacts from './pages/CreateContact';
import EditCustomer from './pages/EditCustomer';
import Employees from './pages/Employees';
import CreateEmployee from './pages/CreateEmployee';
import EditEmployee from './pages/EditEmployee';

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/create-company' element={<CreateCompany />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<AppLayout />}>
              <Route path='/' element={<Navigate to='/dashboard' />} />
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='products' element={<Products />} />
              <Route path='products/create' element={<CreateProduct />} />
              <Route
                path='products/edit-product/:id'
                element={<EditProduct />}
              />
              <Route path='customers' element={<Customers />} />
              <Route path='customers/create' element={<CreateCustomer />} />
              <Route
                path='customers/edit-customer/:id'
                element={<EditCustomer />}
              />
              <Route path='contacts' element={<Contacts />} />
              <Route path='contacts/create' element={<CreateContacts />} />
              <Route path='contacts/edit/:id' element={<EditContact />} />
              <Route path='employees' element={<Employees />} />
              <Route path='employees/create' element={<CreateEmployee />} />
              <Route path='employees/edit/:id' element={<EditEmployee />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

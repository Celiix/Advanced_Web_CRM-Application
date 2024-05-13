import axios from './axios';

export const userLogin = async (body) => {
  const { data } = await axios.post('/users/login', body);
  return { token: data.token, user: data.data.user };
};

export const customerLogin = async (body) => {
  const { data } = await axios.post('/customers/login', body);
  return { token: data.token, customer: data.data.customer };
};

export const getMe = async (userType) => {
  let resource = 'users';
  if (userType === 'customer') resource = 'customers';

  const { data } = await axios.get(`/${resource}/getMe`);
  return data.data.user;
};
export const logout = async () => {
  const { data } = await axios.get('/users/logout');
  return data;
};

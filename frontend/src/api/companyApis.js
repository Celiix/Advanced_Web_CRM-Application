import axios from './axios';

export const getCompany = async () => {
  const { data } = await axios.get('/company');
  if (data.data.data.length === 0) return data.data.data;
  return data.data.data[0];
};

export const createCompany = async (body) => {
  const { data } = await axios.post('/company', body);
  return data.data.data;
};

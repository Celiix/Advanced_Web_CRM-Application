import axios from './axios';

export const getCustomers = async () => {
  const { data } = await axios.get('/customers');
  return data.data.data;
};
export const getCustomer = async (id) => {
  const { data } = await axios.get(`/customers/${id}`);
  return data.data.data;
};
export const createCustomer = async (body) => {
  const { data } = await axios.post('/customers', body);
  return data.data.data;
};
export const updateCustomer = async (id, body) => {
  const { data } = await axios.patch(`/customers/${id}`, body);
  return data.data.data;
};
export const deleteCustomer = async (id) => {
  const { data } = await axios.delete(`/customers/${id}`);
  return data.data.data;
};

export const getCustomerContacts = async (customerId) => {
  const { data } = await axios.get(`/contact-logs?customer=${customerId}`);
  return data.data.data;
};
export const getCustomerProducts = async () => {
  const { data } = await axios.get('/customers/products');
  return data.data.data;
};

import axios from './axios';

export const getProducts = async () => {
  const { data } = await axios.get('/products');
  return data.data.data;
};
export const getProduct = async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  return data.data.data;
};
export const createProduct = async (body) => {
  const { data } = await axios.post('/products', body);
  return data.data.data;
};
export const updateProduct = async (id, body) => {
  const { data } = await axios.patch(`/products/${id}`, body);
  return data.data.data;
};
export const deleteProduct = async (id) => {
  const { data } = await axios.delete(`/products/${id}`);
  return data.data.data;
};

import axios from './axios';

export const getUsers = async () => {
  const { data } = await axios.get('/users?role[ne]=admin');
  return data.data.data;
};
export const getUser = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data.data.data;
};
export const createUser = async (body) => {
  const { data } = await axios.post('/users/create', body);
  return data.data.data;
};
export const updateUser = async (id, body) => {
  const { data } = await axios.patch(`/users/${id}`, body);
  return data.data.data;
};
export const deleteUser = async (id) => {
  const { data } = await axios.delete(`/users/${id}`);
  return data.data.data;
};

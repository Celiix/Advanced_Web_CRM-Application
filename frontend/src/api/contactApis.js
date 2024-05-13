import axios from './axios';

export const getContactLogs = async () => {
  const { data } = await axios.get('/contact-logs');
  return data.data.data;
};
export const getContactLog = async (id) => {
  const { data } = await axios.get(`/contact-logs/${id}`);
  return data.data.data;
};
export const createContactLog = async (body) => {
  const { data } = await axios.post('/contact-logs', body);
  return data.data.data;
};
export const updateContactLog = async (id, body) => {
  const { data } = await axios.patch(`/contact-logs/${id}`, body);
  return data.data.data;
};
export const deleteContactLog = async (id) => {
  const { data } = await axios.delete(`/contact-logs/${id}`);
  return data.data.data;
};

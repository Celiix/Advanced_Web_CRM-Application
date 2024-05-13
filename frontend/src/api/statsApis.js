import axios from './axios';

export const getStats = async () => {
  const { data } = await axios.get('/stats');
  return data.data;
};

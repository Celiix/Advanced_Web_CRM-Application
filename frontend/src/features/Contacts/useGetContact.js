import { useQuery } from '@tanstack/react-query';
import { getContactLog } from '../../api/contactApis';

export const useGetContact = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ['contact'],
    queryFn: () => getContactLog(id),
  });
  return { contact: data, isLoading };
};

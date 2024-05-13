import { useQuery } from '@tanstack/react-query';
import { getContactLogs } from '../../api/contactApis';

export const useContacts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: getContactLogs,
  });
  return { contacts: data, isLoading };
};

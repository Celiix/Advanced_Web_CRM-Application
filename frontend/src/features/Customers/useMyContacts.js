import { useQuery } from '@tanstack/react-query';
import { getCustomerContacts } from '../../api/customerApis';
export const useMyContacts = (customerId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: () => getCustomerContacts(customerId),
  });
  return { contacts: data, isLoading };
};

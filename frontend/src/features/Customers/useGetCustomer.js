import { useQuery } from '@tanstack/react-query';
import { getCustomer } from '../../api/customerApis';

export const useGetCustomer = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ['customer'],
    queryFn: () => getCustomer(id),
  });
  return { customer: data, isLoading };
};

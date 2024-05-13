import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '../../api/customerApis';

export const useCustomers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: getCustomers,
  });
  return { customers: data, isLoading };
};

import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/userApis';

export const useEmployees = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['employees'],
    queryFn: getUsers,
  });
  return { employees: data, isLoading };
};

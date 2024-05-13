import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../api/userApis';

export const useGetEmployee = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ['employee'],
    queryFn: () => getUser(id),
  });
  return { employee: data, isLoading };
};

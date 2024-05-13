import { useQuery } from '@tanstack/react-query';
import { getStats } from '../../api/statsApis';
export const useStats = () => {
  const { data, isLoading } = useQuery({
    queryKey: 'stats',
    queryFn: getStats,
  });
  return { data, isLoading };
};

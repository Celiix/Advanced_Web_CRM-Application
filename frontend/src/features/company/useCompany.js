import { useQuery } from '@tanstack/react-query';
import { getCompany } from '../../api/companyApis';
const useCompany = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['company'],
    queryFn: getCompany,
  });
  return { data, isLoading };
};

export default useCompany;

import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../api/productApis';

export const useGetProduct = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProduct(id),
  });
  return { product: data, isLoading };
};

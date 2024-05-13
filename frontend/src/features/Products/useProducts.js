import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/productApis';

export const useProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return { products: data, isLoading };
};

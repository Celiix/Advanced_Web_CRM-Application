import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProduct } from '../../api/productApis';
import { useNavigate } from 'react-router-dom';

export const useCreateProducts = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ['create-product'],
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      navigate('/products');
    },
  });
  return { create: mutate, isLoading };
};

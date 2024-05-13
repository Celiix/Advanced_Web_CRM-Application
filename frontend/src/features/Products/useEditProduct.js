import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../../api/productApis';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEditProducts = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['update-product'],
    mutationFn: ({ id, body }) => updateProduct(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
      navigate('/products');
    }
  }, [isSuccess, queryClient, navigate]);
  return { update: mutate, isLoading };
};

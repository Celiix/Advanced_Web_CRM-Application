import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProduct } from '../../api/productApis';

export const useDeleteProducts = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ['delete-product'],
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });
  return { delete: mutate, isLoading };
};

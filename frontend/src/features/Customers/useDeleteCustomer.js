import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCustomer } from '../../api/customerApis';

export const useDeleteCustomers = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ['delete-Customer'],
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      });
    },
  });
  return { delete: mutate, isLoading };
};

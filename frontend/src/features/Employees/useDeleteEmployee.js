import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../../api/userApis';
import { useEffect } from 'react';

export const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['delete-employee'],
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['employees'],
      });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ['employees'],
      });
    }
  }, [isSuccess, queryClient]);
  return { delete: mutate, isLoading };
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContactLog } from '../../api/contactApis';
import { useEffect } from 'react';

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['delete-contact'],
    mutationFn: deleteContactLog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
    }
  }, [isSuccess, queryClient]);
  return { delete: mutate, isLoading };
};

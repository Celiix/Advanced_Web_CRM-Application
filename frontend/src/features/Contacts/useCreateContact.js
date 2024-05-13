import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContactLog } from '../../api/contactApis';

export const useCreateContactLog = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: 'createContact',
    mutationFn: createContactLog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
    },
  });
  return { create: mutate, isLoading };
};

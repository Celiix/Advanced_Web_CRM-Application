import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateContactLog } from '../../api/contactApis';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEditContact = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['update-contact'],
    mutationFn: ({ id, body }) => updateContactLog(id, body),
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
      navigate('/contacts');
    }
  }, [isSuccess, queryClient, navigate]);
  return { update: mutate, isLoading };
};

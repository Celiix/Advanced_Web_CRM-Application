import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../api/userApis';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEditEmployee = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['update-employee'],
    mutationFn: ({ id, body }) => updateUser(id, body),
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
      navigate('/employees');
    }
  }, [isSuccess, queryClient, navigate]);
  return { update: mutate, isLoading };
};

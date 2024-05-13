import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser } from '../../api/userApis';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useCreateEmployee = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['create-employee'],
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['employees'],
      });
      navigate('/employees');
    },
  });
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ['employees'],
      });
      navigate('/employees');
    }
  }, [isSuccess, navigate, queryClient]);
  return { create: mutate, isLoading };
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCustomer } from '../../api/customerApis';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useEditCustomers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['update-Customer'],
    mutationFn: ({ id, body }) => updateCustomer(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      });
    },
  });
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      });
      navigate('/customers');
    }
  }, [isSuccess, queryClient, navigate]);
  return { update: mutate, isLoading };
};

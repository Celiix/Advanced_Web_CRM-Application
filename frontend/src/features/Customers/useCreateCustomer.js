import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCustomer } from '../../api/customerApis';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useCreateCustomers = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationKey: ['create-customer'],
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      });
      navigate('/customers');
    },
  });
  useEffect(() => {
    if (isSuccess) {
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      });
      navigate('/customers');
    }
  }, []);
  return { create: mutate, isLoading };
};

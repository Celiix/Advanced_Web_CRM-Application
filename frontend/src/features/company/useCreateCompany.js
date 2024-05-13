import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCompany } from '../../api/companyApis';
import { useNavigate } from 'react-router-dom';

const useCreateCompany = () => {
  const navigate = useNavigate();
  const client = useQueryClient();
  const { mutate, isLoading } = useMutation({
    queryKey: 'createCompany',
    mutationFn: createCompany,
    onSuccess: (data) => {
      client.setQueryData({
        keys: ['company'],
        values: data,
      });
      navigate('/');
    },
  });
  return { createCompany: mutate, isLoading };
};

export default useCreateCompany;

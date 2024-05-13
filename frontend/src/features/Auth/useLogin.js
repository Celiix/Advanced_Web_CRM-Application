import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userLogin, customerLogin } from '../../api/authApis';
import { useSetRecoilState } from 'recoil';
import authAtom from '../../atoms/authAtom';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const userType = localStorage.getItem('userType') || 'user';
  const navigate = useNavigate();
  const setAuthData = useSetRecoilState(authAtom);
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationKey: ['login'],
    mutationFn: userType === 'user' ? userLogin : customerLogin,
    onSuccess: (data) => {
      const { token, user } = data;
      const storeData = {
        userType,
        isAuthenticated: true,
        token,
        user,
      };
      queryClient.setQueryData({
        keys: ['auth'],
        values: storeData,
      });
      localStorage.setItem('userType', userType);
      localStorage.setItem('token', token);
      setAuthData(storeData);
      navigate('/');
    },
  });
  return { login: mutate, isLoading };
};

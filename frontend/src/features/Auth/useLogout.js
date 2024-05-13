import { useMutation } from '@tanstack/react-query';
import { logout } from '../../api/authApis';

export const useLogout = () => {
  const { mutate, isLoading } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem('token');
      window.location.assign('/');
    },
  });
  return { logout: mutate, isLoading };
};

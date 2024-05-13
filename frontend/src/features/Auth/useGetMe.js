import { useQuery } from '@tanstack/react-query';
import { getMe } from '../../api/authApis';
import { useSetRecoilState } from 'recoil';
import authAtom from '../../atoms/authAtom';
import { useEffect } from 'react';

export const useGetMe = () => {
  const setAuth = useSetRecoilState(authAtom);
  const userType = localStorage.getItem('userType') || 'user';
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMe(userType),
    onSuccess: (data) => {
      console.log(data);
      setAuth((prevS) => ({
        ...prevS,
        user: data,
        isAuthenticated: true,
        userType: userType,
      }));
    },
  });
  useEffect(() => {
    if (data && !isLoading) {
      setAuth((prevS) => ({
        ...prevS,
        user: data,
        isAuthenticated: true,
        userType: userType,
      }));
    }
  }, [data, isLoading, setAuth, userType]);
  return { data, isLoading };
};

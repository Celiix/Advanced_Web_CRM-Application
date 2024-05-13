import { atom } from 'recoil';

const authAtom = atom({
  key: 'auth',
  default: {
    userType: 'user',
    isAuthenticated: false,
    token: null,
    user: null,
  },
});

export default authAtom;

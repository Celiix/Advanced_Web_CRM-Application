import { atom } from 'recoil';

export const companyAtom = atom({
  key: 'company',
  default: {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    website: '',
    logo: '',
  },
});

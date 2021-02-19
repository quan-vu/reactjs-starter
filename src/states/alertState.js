import { atom, RecoilState } from 'recoil';

export const AlertState = {
  open: Boolean,
  primary: String,
  secondary: String,
  type: String,
  timeout: Number,
}

export const alertState = atom({
  key: 'alertState',
  default: {
    open: false,
    primary: '',
    secondary: '',
    type: 'info',
    timeout: 5000,
  },
});
import { atom } from 'recoil';

export const homepageState = atom({
    key: 'homepageState',
    default: {
        isShowAlertDialogRecoil: false
    },
});
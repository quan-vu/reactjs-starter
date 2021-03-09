import { atom } from 'recoil';

export const appState = atom({
    key: 'appState',
    default: {
        layouts: ['FrontLayout','DashboardLayout'],
        defaultLayout: 'Dashboard'
    },
});
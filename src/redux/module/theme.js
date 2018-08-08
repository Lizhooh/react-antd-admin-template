import Fine from 'redux-fine';

export default class Theme extends Fine.Module {
    initState = {
        name: 'theme-module',

        menu: {
            width: '240px',
            backgroundColor: '#567',
        },

        navigation: {
            height: '60px',
            backgroundColor: '#fff',
        }
    }
}
import Fine from 'redux-fine';

export default class Theme extends Fine.Module {
    initState = {
        name: 'theme-module',
        color: 'rgba(30, 125, 245, 0.9)',

        menu: {
            width: '220px',
            backgroundColor: 'rgba(32, 38, 51, 1)',
        },

        navigation: {
            height: '60px',
            backgroundColor: '#fff',
        },
    }
}

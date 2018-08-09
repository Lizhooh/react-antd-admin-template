import Fine from 'redux-fine';

export default class Theme extends Fine.Module {
    initState = {
        name: 'theme-module',
        color: '#37f',

        menu: {
            width: '200px',
            backgroundColor: 'rgba(32, 38, 51, 1)',
        },

        navigation: {
            height: '60px',
            backgroundColor: '#fff',
        },
    }
}


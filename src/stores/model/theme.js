
export default ({ commit }) => ({
    initState: {
        name: 'theme-module',
        color: 'rgba(255, 255, 255, 0.5)',

        menu: {
            width: '230px',
            backgroundColor: 'rgba(32, 38, 41, 0.9)',
        },

        navigation: {
            height: '60px',
            backgroundColor: '#fff',
        },
    },

    updateThemeColor() {
        const m = Math.random() > 0.5;
        commit({ color: m ? '#39f' : '#f35' });
    },
});
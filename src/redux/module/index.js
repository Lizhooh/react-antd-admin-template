import Fine from 'redux-fine';

export default class IndexModule extends Fine.Module {
    initState = {
        name: 'index-module',
    }

    updateThemeColor = () => {
        const theme = this.app.module.theme;
        theme.commit(state => this.assign(state, {
            color: '#f45',
        }));
    }
}
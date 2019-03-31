import Easy, { createModel } from 'redux-easy-action';

import IndexModel from './model/index';
import ThemeModel from './model/theme';
import MenuModel from './model/menu';
import NavigateModel from './model/navigate';

const easy = Easy({
    initState: {},
    devtool: true,
    model: {
        index: createModel('index', IndexModel),
        theme: createModel('theme', ThemeModel),
        menu: createModel('menu', MenuModel),
        navigate: createModel('navigate', NavigateModel),
    },
});

export default easy.store;
export const actions = easy.actions;
export const models = easy.models;


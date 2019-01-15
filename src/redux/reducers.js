import { createReducer } from 'redux-store-init';

export const root = createReducer('root', {
    name: 'root-module',

    // 菜单栏选项
    menu: [{
        id: 'home',
        isparent: true,
        icon: 'home',
        name: '主页',
        children: [{
            id: '/index',
            path: ['/', '/index'],
            name: '仪表盘',
        }],
    }, {
        id: 'star',
        isparent: true,
        icon: 'star',
        name: '收藏',
        children: [{
            id: '/star',
            path: '/star',
            name: '文章收藏',
        }],
    }, {
        id: 'setting',
        isparent: true,
        icon: 'movie',
        name: '设置',
        children: [{
            id: '/setting',
            path: '/setting',
            name: '系统设置',
        }],
    }],

    // 导航栏相关
    navigation: {
        link: [{
            text: '主页',
        }, {
            text: '反馈',
        }, {
            text: '帮助',
        }],
        oper: [{
            text: '用户主页',
            color: '#9ab',
            icon: 'home',
        }, {
            text: '用户退出',
            color: '#9ab',
            icon: 'exit_to_app',
        }],
        userName: 'admin',
    },
});

export const index = createReducer('index', {
    name: 'app',
});

export const theme = createReducer('theme', {
    name: 'theme-module',
    color: 'rgba(255, 255, 255, 0.5)',

    menu: {
        width: '220px',
        backgroundColor: 'rgba(32, 38, 51, 1)',
    },

    navigation: {
        height: '60px',
        backgroundColor: '#fff',
    },
});
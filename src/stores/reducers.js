import { createReducer } from 'redux-store-init';

export const index = createReducer('index', {
    name: 'app',
});

// 主题
export const theme = createReducer('theme', {
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
});

// 菜单栏
export const menu = createReducer('menu', {
    list: [{
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
        }, {
            id: '/setting2',
            path: '/setting2',
            name: '系统设置',
        }, {
            id: '/setting3',
            path: '/setting3',
            name: '系统设置',
        }],
    }],
    active: {},
    mark: [... new Array(100)].fill(false),
});

// 导航栏
export const navigate = createReducer('navigate', {
    link: [{
        text: '主页',
        path: '/',
    }, {
        text: '反馈',
        path: '/',
    }, {
        text: '帮助',
        path: '/',
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
});
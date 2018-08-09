import Fine from 'redux-fine';

export default class RootModule extends Fine.Module {
    initState = {
        name: 'root-module',

        // 菜单栏选项
        menu: [{
            id: 'home',
            isparent: true,
            icon: 'home',
            name: '主页',
            children: [{
                id: '/index',
                path: '/index',
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
    }
}
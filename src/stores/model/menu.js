import Nprogress from 'nprogress';

export default ({ commit, getState }) => ({
    initState: {
        list: [{
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
        }, {
            id: 'chart',
            isparent: true,
            icon: 'movie',
            name: '图表',
            children: [{
                id: '/chart',
                path: '/chart',
                name: '条形图',
            }, {
                id: '/chart2',
                path: '/chart2',
                name: '饼图',
            }],
        }],
        active: {},
        mark: [...new Array(100)].fill(false),
    },

    // 点击菜单项时改变
    onMenuItemClick(item, parent) {
        Nprogress.set(0.4);
        setTimeout(Nprogress.done, 500);
        item.parent = parent;
        commit({ active: item });
    },

    // 根据 url 检查激活状态
    initActive() {
        const state = getState();
        const p = window.location.hash.slice(1);
        const res = isActive(state.list, p);
        if (res) state.active = res;
        else state.active = {};
        commit({ ...state });
    },

    // 打开或关闭父级
    onMenuTogger(index) {
        const state = getState();
        state.mark[index] = !state.mark[index];
        commit({ ...state });
    },
});

function isActive(list, P) {
    for (let i = 0; i < list.length; i++) {
        if (!Array.isArray(list[i].children)) continue;
        const item = list[i].children.find(i => {
            if (Array.isArray(i.path))
                return i.path.indexOf(P) > -1;
            return i.path === P;
        });
        if (item) {
            item.parent = list[i];
            return item;
        }
    }
    return false;
}
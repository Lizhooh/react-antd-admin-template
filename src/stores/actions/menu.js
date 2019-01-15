import Nprogress from 'nprogress';
import { commit } from '..';

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

export const onMenuItemClick = (item, parent) => {
    Nprogress.set(0.4);
    setTimeout(Nprogress.done, 500);
    item.parent = parent;
    commit('menu', { active: item });
}

// 根据 url 检查激活状态
export const initActive = () => {
    commit('menu', state => {
        const res = isActive(state.list, window.location.pathname);
        if (res) state.active = res;
        return state;
    });
}

// 打开或关闭父级
export const onMenuTogger = index => {
    commit('menu', state => {
        state.mark[index] = !state.mark[index];
        return state;
    });
}


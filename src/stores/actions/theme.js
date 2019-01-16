import { commit } from '..';

export const updateThemeColor = () => {
    commit('theme', { color: '#f35' });
}
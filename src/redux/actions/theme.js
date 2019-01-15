import { commit } from '..';


export const updateThemeColor = color => {
    commit('theme', { color: '#f35' });
}
import Stroe from 'redux-store-init';
import * as reducers from './reducers';

const store = Stroe({ reducers, devtool: true });

export default store;
export const dispatch = (...arg) => store.dispatch(...arg);
export const getState = (...arg) => store.getState(...arg);

const keys = Object.keys(reducers);
const isFun = v => typeof v === 'function';
const isStr = v => typeof v === 'string';
const isObj = v => typeof v === 'object';

/**
 * 提交一个数据的变化
 * commit('index', (state, initState) => newState)
 * commit('index', newState)
 * @param{String} name - 模块名称
 * @param{Function|Object} callback/newState - 返回新数据的回调函数或新的数据
 * @return{Object} newState - 改变后的数据
*/
export const commit = (name, oper) => {
    let _newState = null;
    // 参数匹配已经指定的模块需要存在
    if (isStr(name) && (isFun(oper) || isObj(oper)) && keys.includes(name)) {
        dispatch({
            type: name || '$$root',
            newState: (state, initState) => {
                _newState = isFun(oper) ? {
                    ...state,
                    ...oper(state, initState)
                } : { ...state, ...oper };
                return _newState;
            },
        });
        return _newState;
    }
    console.warn('parameter error');
    return _newState;
}

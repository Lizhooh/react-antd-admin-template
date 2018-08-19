import * as mobx from 'mobx';

const $ = {
    store: {},
    state: {},
    action: {},
    computed: {},
    helper: {},
}

function _store(name, obj) {
    $.store[name] = obj;
}

function _state(name, key, value) {
    if (!$.state[name]) $.state[name] = {};
    $.state[name][key] = value;
}

function _action(name, key, value) {
    if (!$.action[name]) $.action[name] = {};
    $.action[name][key] = value;
}

function _computed(name, key, value) {
    if (!$.computed[name]) $.computed[name] = {};
    $.computed[name][key] = value;
}

function _helper(key, value) {
    if (key !== undefined && value !== undefined) {
        $.helper[key] = value;
    }
}

/**
 * 注册一个 store
 * @param{String} name - store 名称
 * @param{Object} obj - store 对象，必须具备 state, computed, action 属性
 */
export function register(name, obj = {}) {

    const ober = {};
    const _o = {};

    // 对 obj 补全
    obj = { state: {}, computed: {}, action: {}, ...obj };

    Object.keys(obj.state).forEach(k => {
        if (k[0] !== '_') {
            ober[k] = mobx.observable;
            // _state(name, k, obj.state[k]);
            _o[k] = obj.state[k];
        }
    });
    Object.keys(obj.computed).forEach(k => {
        const dest = Object.getOwnPropertyDescriptor(obj.computed, k);
        if (k[0] !== '_' && dest && !dest.writable) {
            ober[k] = mobx.computed;
            // _computed(name, k, obj.computed[k]);
            _o[k] = obj.computed[k];
        }
    });
    Object.keys(obj.action).forEach(k => {
        if (k[0] !== '_' && typeof obj.action[k] === 'function') {
            ober[k] = mobx.action.bound;
            _action(name, k, obj.action[k]);
            _o[k] = obj.action[k];
        }
    });

    const res = mobx.observable.object(_o, ober);
    _store(name, res);

    // 可观察对象与属性
    Object.keys(res).forEach(k => {
        const dest = Object.getOwnPropertyDescriptor(obj.computed, k);
        dest && !dest.writable ?
            _computed(name, k, res[k]) :
            _state(name, k, res[k]);
    });

    return res;
}

/**
 * 返回指定的 store
 * @param{String} name - store 名称
 */
export function store(name) {
    if (name === undefined) return $.store;
    return $.store[name];
}

/**
 * 返回指定的 state
 * @param{String} name - store 名称
 */
export function state(name) {
    if (name === undefined) return $.state;
    return $.state[name];
}

/**
 * 返回指定的 action
 * @param{String} name - stroe 名称
*/
export function action(name) {
    if (name === undefined) return $.action;
    return $.action[name];
}

/**
 * 返回指定的 computed
 * @param{String} name - store 名称
 */
export function computed(name) {
    if (name === undefined) return $.computed;
    return $.computed[name];
}

/**
 * 合并 state, computed, action
 */
export function assign({ state, computed, action } = {}) {
    return {
        state: state || {},
        computed: computed || {},
        action: action || {},
    };
}

/** 初始化 Free */
export function init(cb) {
    if (typeof cb === 'function') {
        cb($);
    }
}

/**
 * 添加/获取辅助函数
 * @param{String} key -
 * @param{Function} value -
 * @return{Function|void}
 */
export function helper(key, value) {
    if (value === undefined) {
        if (key === undefined) return $.helper;
        return $.helper[key];
    }
    else {
        _helper(key, value);
    }
}

export default {
    register,
    store,
    state,
    action,
    computed,
    assign,
    init,
    helper,
    runInAction: mobx.runInAction,
}

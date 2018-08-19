import React from 'react';
import { observer } from 'mobx-react';

import Free from 'mobx-free';

import * as IndexStore from './stores/index';
import * as ThemeStore from './stores/theme';
import * as RootStore from './stores/root';

Free.register('index', IndexStore);
Free.register('theme', ThemeStore);
Free.register('root', RootStore);

/**
 * 自动连接 store
 * @param{Function} statefunc
 * @return{Function}
 */
Free.helper('connect', (statefunc) => {
    return (C) => {
        C = observer(C);
        return () => <C {...statefunc(Free.store())} />
    }
});

Free.init(data => {
    console.log('初始化完成');
    console.log(data);
});

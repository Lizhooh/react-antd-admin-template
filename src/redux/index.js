import Fine from 'redux-fine';
import logger from 'redux-logger';
import assign from 'lodash.assign';

import IndexModule from './module';
import ThemeModule from './module/theme';
import RootModule from './module/root';

Fine.config({ devtool: true, middlewares: [logger] });

Fine.mixin('assign', (...arg) => ({ ...assign(...arg) }));

Fine.module('index', IndexModule);
Fine.module('theme', ThemeModule);
Fine.module('root', RootModule);

export default Fine.store();

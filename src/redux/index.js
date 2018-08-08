import Fine from 'redux-fine';

import IndexModule from './module';
import ThemeModule from './module/theme';

Fine.config({ devtool: true });

Fine.modules('index', IndexModule);
Fine.modules('theme', ThemeModule);

export default Fine.store();
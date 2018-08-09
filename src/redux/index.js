import Fine from 'redux-fine';

import IndexModule from './module';
import ThemeModule from './module/theme';
import RootModule from './module/root';

Fine.config({ devtool: true });

Fine.modules('index', IndexModule);
Fine.modules('theme', ThemeModule);
Fine.modules('root', RootModule);

export default Fine.store();
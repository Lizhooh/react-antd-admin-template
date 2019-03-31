import loadable from 'react-loadable';

import Index from '../views/Index';
import LoadPageIcon from '../components/common/LoadPageIcon';

export default [
    {
        path: '/index',
        exact: true,
        component: Index,
    },
    {
        path: '/chart',
        exact: true,
        component: loadable({
            loader: () => import('../views/Chart'),
            loading: LoadPageIcon,
        }),
    },
];


import React from 'react';
import loadable from '@loadable/component';
import Index from '../views/index';
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
        component: loadable(() => import('../views/chart'), { fallback: <LoadPageIcon /> }),
    },
];
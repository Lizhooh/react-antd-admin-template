import React from 'react';
import loadable from '@loadable/component';
import Index from '../views/Index';
import LoadPageIcon from '../components/common/LoadPageIcon';

const asyncLoad = (C) => (
    loadable(() => C, { fallback: <LoadPageIcon /> })
);

export default [
    {
        path: '/index',
        exact: true,
        component: Index,
    },
    {
        path: '/chart',
        exact: true,
        component: asyncLoad(import('../views/Chart')),
    },
];


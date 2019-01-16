import React from 'react';
import loadable from '@loadable/component';
import Index from '../views/Index';
import LoadPageIcon from '../components/common/LoadPageIcon';

const asyncLoad = (C) => {
    const View = loadable(() => C, { fallback: <LoadPageIcon /> });
    return (props) => <View {...props} />;
}

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


import React from 'react';
import Index from '../views/Index';
import LoadPageIcon from '../components/common/LoadPageIcon';
import loadable from 'react-loadable';

const asyncLoad = (C) => {
    const View = loadable({
        loader: () => C,
        loading: LoadPageIcon,
    });
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


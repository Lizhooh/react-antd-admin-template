import React, { Component } from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import routerMap from './router';
import Menu from './components/common/menu';
import Navigation from './components/common/navigation';

const menuData = [
    {
        id: '/home',
        isparent: true,
        path: '/home',
        icon: '',
        name: '主页',
        children: [],
    }, {
        id: '/star',
        path: '/star',
        isparent: true,
        icon: '',
        name: '收藏',
        children: [],
        component: '',
    }, {
        id: '',
        isparent: true,
        path: '/about',
        icon: '',
        name: '关于',
        children: [],
        component: '',
    },
];

export default connect(
    state => ({ root: state, theme: state.theme }),
)(class App extends Component {
    render() {
        return (
            <div>
                <Menu data={menuData} />
                <Navigation />

                <Main>
                    <Switch>
                        {routerMap.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                component={item.component} />
                        ))}
                        <Route component={() => <h3>404</h3>} />
                    </Switch>
                </Main>
            </div>
        );
    }
});

const Main = styled.div`
    padding-left: 240px;
    padding-top: 55px;
`;

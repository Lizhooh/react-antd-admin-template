import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import routerMap from './router';
import Menu from './container/Menu';
import Navigation from './container/Navigation';
import NotFound from './views/not-found';

const RouterView = () => (
    <Switch>
        {routerMap.map((item, index) => {
            if (Array.isArray(item.path)) {
                return item.path.map((p, index2) => (
                    <Route
                        exact={item.exact}
                        key={index2}
                        path={p}
                        component={item.component}
                    />
                ));
            }
            return (
                <Route
                    exact={item.exact}
                    key={index}
                    path={item.path}
                    component={item.component}
                />
            )
        })}
        <Route path='*' component={NotFound} />
    </Switch>
);

export default () => (
    <Router>
        <Fragment>
            <Menu />
            <Navigation />
            <Main>
                <RouterView />
            </Main>
        </Fragment>
    </Router>
);

const Main = styled.div`
    padding-left: ${p => p.theme.menu.width};
    padding-top: ${p => p.theme.navigation.height};
`;

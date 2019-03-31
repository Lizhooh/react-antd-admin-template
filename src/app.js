import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Menu from './container/Menu';
import Navigation from './container/Navigation';
import NotFound from './views/NotFound';
import routes from './routes';

const RouterView = () => (
    <Switch>
        {routes.map((item, index) => (
            Array.isArray(item.path) ?
                item.path.map((p, index2) => (
                    <Route key={index2} {...p} />
                )) :
                <Route key={index} {...item} />
        ))}
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

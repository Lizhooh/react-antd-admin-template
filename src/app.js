import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import routerMap from '@/router';
import Menu from '@/components/common/menu';
import Navigation from '@/components/common/navigation';
import NotFound from '@/views/not-found';

import { OnUpdate } from 'rrc';


export default connect(
    state => ({ root: state.root, theme: state.theme }),
)(class App extends Component {

    renderMain = () => (
        <Main>
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
                    );
                })}
                <Route path='*' component={NotFound} />
            </Switch>
        </Main>
    )

    render() {
        const { menu, navigation } = this.props.root;

        return (
            <Router>
                <Fragment>
                    <Menu data={menu} />
                    <Navigation data={navigation} />
                    {this.renderMain()}
                    <OnUpdate call={location => console.log(location)} />
                </Fragment>
            </Router>
        );
    }
});

const Main = styled.div`
    padding-left: ${p => p.theme.menu.width};
    padding-top: ${p => p.theme.navigation.height};
`;

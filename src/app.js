import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routerMap from '@/router';

// components
import Menu from '@/components/common/menu';
import Navigation from '@/components/common/navigation';

// views
import NotFound from '@/views/not-found';

// free
import Free from 'mobx-free';

import { OnUpdate } from 'rrc';

// 主架构，此处可做路由拦截。
export default Free.helper('connect')(
    state => ({ root: state.root }),
)(class extends Component {

    componentDidMount() {
        this.props.root.update();
    }

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
            <Router onUpdate={e => console.log(e)}>
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

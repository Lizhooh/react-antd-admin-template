import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navigation extends Component {

    render() {
        return (
            <Panel>

            </Panel>
        );
    }
}

const Panel = styled.div`
    height: ${p => p.theme.navigation.height};
    background-color: ${p => p.theme.navigation.backgroundColor};
    position: fixed;
    top: 0;
    left: ${p => p.theme.menu.width};
    right: 0;
    box-shadow: 1px 3px 8px rgba(1, 1, 1, 0.06);
`;

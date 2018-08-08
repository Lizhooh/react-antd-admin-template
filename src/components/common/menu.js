import React, { Component } from 'react';
import styled from 'styled-components';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;

        return (
            <Panel>
                <div style={{ height: 160 }}>


                </div>
                {data.map((item, index) => (
                    <Item key={index}>
                        {item.name}
                    </Item>
                ))}
            </Panel>
        );
    }
}

const Panel = styled.div`
    width: ${p => p.theme.menu.width};
    background-color: ${p => p.theme.menu.backgroundColor};
    height: 100%;
    height: 100vh;
    position: fixed;
    box-shadow: 2px 1px 10px rgba(1, 1, 1, 0.28);
    overflow-y: auto;
`;

const Item = styled.div`
    padding: 12px 24px;
    cursor: pointer;
    color: #e4e5e6;
    &:hover {
        transition: all 0.18s ease-in-out;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;
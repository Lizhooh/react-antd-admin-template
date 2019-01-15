import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OnUpdate } from 'rrc';
import Icon from './Icon';

export default class Menu extends Component {

    static defaultProps = {
        data: [],
        active: {},     // 激活的
        mark: [],
        onMenuItemClick: e => e,
        onMenuTogger: e => e,
        initActive: e => e,
    }

    componentDidMount() {
        this.props.initActive();
    }

    render() {
        const {
            data, active, mark,
            onMenuItemClick,
            onMenuTogger,
            initActive,
        } = this.props;

        return (
            <Panel>
                <Logo className="flex flex-center">
                    Logo
                </Logo>
                <div>{data.map((item, index) => (
                    <div key={item.id}>
                        <Item
                            className="flex flex-ai-center"
                            onClick={() => onMenuTogger(index)}>
                            <Icon type={item.icon} color="#ccc" size={16} margin='0 10px 0 0' />
                            <span className="flex-full">{item.name}</span>
                            <Icon
                                type={`keyboard_arrow_${mark[index] ? 'down' : 'up'}`}
                                color={`rgba(255, 255, 255, 0.${mark[index] ? '66' : '33'})`}
                            />
                        </Item>
                        {/* 子项 */}
                        <ItemSubPanel active={mark[index]} n={item.children}>
                            {item.children && item.children.map(i => (
                                <Link key={i.id}
                                    to={Array.isArray(i.path) ? i.path[0] : i.path}>
                                    <ItemChild
                                        className="flex flex-ai-center"
                                        active={i.id === active.id}
                                        onClick={() => onMenuItemClick(i, item)}>
                                        <span className="flex-full">{i.name}</span>
                                    </ItemChild>
                                </Link>
                            ))}
                        </ItemSubPanel>
                    </div>
                ))}
                </div>

                <OnUpdate call={initActive} />
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
    text-shadow: 1px 2px 2px rgba(1, 1, 1, 0.12);
    overflow-y: auto;
`;

const Logo = styled.div`
    height: 100px;
    background-color: rgba(255, 255, 255, 0.04);
    color: #999;
    font-size: 18px;
`;

const Item = styled.div`
    padding: 12px 24px;
    cursor: pointer;
    color: #ddd;
    position: relative;
    font-size: 14px;
    height: 45px;
    border-right: 2px solid transparent;
    > span { text-align: left; }

    &:hover, &:active {
        color: #fff;
        font-size: 14px;
        transition: all 0.18s ease-in-out;
        background-color: rgba(255, 255, 255, 0.1);
        border-right: 2px solid #fff;
    }
`;

const ItemSubPanel = styled.div`
    overflow: hidden;
    background-color: rgba(1, 1, 1, 0.18);
    transition: height 0.2s ease-in-out;
    height: ${p => (p.n ? p.n.length : 0) * 43}px;

    > a { color: transparent !important; }
    ${p => !p.active && `
        height: 0;
        padding: 0;
    `}
`;

const ItemChild = Item.extend`
    padding: 10px 24px 10px 50px;
    color: #bbb;
    height: 43px;

    ${p => p.active && `
        background-color: ${p.theme.color} !important;
        color: #fff;
    `}
`;

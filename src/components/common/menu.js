import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from './icon';
import { Link } from 'react-router-dom';
import Nprogress from 'nprogress';

export default class Menu extends Component {

    static defaultProps = {
        data: [],
    }

    constructor(props) {
        super(props);
        this.state = {
            mark: [...new Array(props.data.length)].fill(false),
            selected: -1,
        };
    }

    onItemClick = index => {
        const list = this.state.mark.slice();
        list[index] = !list[index];
        this.setState({ mark: list });
    }

    onItemChildClick = key => {
        this.setState({ selected: key });
        Nprogress.set(0.4);
        setTimeout(Nprogress.done, 500);
    }

    componentDidMount() {
        // 根据 url 检查激活状态
        const path = window.location.pathname;
        const d = this.props.data;
        for (let i = 0; i < d.length; i++) {
            if (Array.isArray(d[i].children)) {
                const item = d[i].children.find(i => {
                    if (Array.isArray(i.path)) {
                        return i.path.indexOf(path) > -1;
                    }
                    return i.path === path;
                });
                if (item) {
                    this.setState({ selected: item.id });
                    return;
                }
            }
        }
    }

    renderMenu = (data, mark, selected) => data.map((item, index) => (
        <div key={item.id}>
            <Item
                className="flex flex-ai-center waves-effect waves-button"
                onClick={this.onItemClick.bind(this, index)}>
                <Icon type={item.icon} color="#ccc" size={16} margin='0 10px 0 0' />
                <span className="flex-full">{item.name}</span>
                <Icon
                    type={`keyboard_arrow_${mark[index] ? 'down' : 'up'}`}
                    color='rgba(255, 255, 255, 0.33)'
                />
            </Item>
            {/* 子项 */}
            <ItemSubPanel active={mark[index]}>
                {item.children && item.children.map(item => (
                    <Link to={Array.isArray(item.path) ? item.path[0] : item.path} key={item.id}>
                        <ItemChild
                            className="flex flex-ai-center"
                            active={item.id === selected}
                            onClick={this.onItemChildClick.bind(this, item.id)}>
                            <span className="flex-full">{item.name}</span>
                        </ItemChild>
                    </Link>
                ))}
            </ItemSubPanel>
        </div>
    ))

    render() {
        const { data } = this.props;
        const { mark, selected } = this.state;

        return (
            <Panel>
                <Logo className="flex flex-center">
                    Logo
                </Logo>
                {this.renderMenu(data, mark, selected)}
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
    text-shadow: 1px 2px 2px rgba(1, 1, 1, 0.14);
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

    > span {
        text-align: left;
    }

    &:hover {
        color: #fff;
        font-size: 14px;
        transition: all 0.18s ease-in-out;
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const ItemSubPanel = styled.div`
    overflow: hidden;
    background-color: rgba(1, 1, 1, 0.18);
    > a { color: transparent !important; }

    ${p => !p.active && `
        height: 0;
        padding: 0;
    `}
`;

const ItemChild = Item.extend`
    padding: 10px 24px 10px 50px;
    color: #bbb;

    ${p => p.active && `
        background-color: ${p.theme.color} !important;
        color: #fff;
    `}
`;

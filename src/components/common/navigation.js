import React, { Component } from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import Icon from './icon';

function StringFirstToUpper(str = '') {
    return str[0].toUpperCase() + str.slice(1);
}

export default class Navigation extends Component {
    render() {
        const { data = {} } = this.props;

        return (
            <Panel className="flex flex-ai-center">
                <div className="flex-full"></div>
                <ul className="flex nav-list">
                    {data.link && data.link.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>

                <Popover
                    content={
                        <div>
                            {data.oper && data.oper.map((item, index) => (
                                <Selected key={index}>
                                    <Icon type={item.icon} color={item.color} />
                                    <span>{item.text}</span>
                                </Selected>
                            ))}
                        </div>
                    }
                    placement="bottom"
                    trigger={['click']}>
                    <div className="user flex flex-center">
                        <img src={require('@/assets/user.jpg')} alt='' className="avatar" />
                        <span>{StringFirstToUpper(data.userName + '' || 'error')}</span>
                    </div>
                </Popover>
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
    text-shadow: 1px 1px 1px rgba(1, 1, 1, 0.04);

    ul.nav-list {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            cursor: pointer;
            margin: 0 16px;
            color: #789;
            &:hover {
                color: #222;
            }
        }
    }

    .user {
        margin: 0 40px;
        cursor: pointer;
    }

    .avatar {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        margin-right: 12px;
    }
`;

const Selected = styled.div.attrs({
    className: 'flex flex-ai-center',
})`
    border-top: 1px solid #eee;
    padding: 8px 7px;
    cursor: pointer;
    border-radius: 3px;
    color: #567;
    font-size: 14px;

    &:first-of-type {
        border: none;
    }

    > span {
        margin-left: 4px;
    }
    &:hover {
        color: #222;
        & > i {
            color: #789;
        }
    }
`;
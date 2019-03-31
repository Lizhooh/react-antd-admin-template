import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Popover, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import Icon from './Icon';

function StringFirstToUpper(str = '') {
    return str[0].toUpperCase() + str.slice(1);
}

export default ({ data = {}, activeMenu }) => (
    <Root>
        <Breadcrumb className='flex-ai-center'>
            <Breadcrumb.Item>
                <Link to='/' replace>首页</Link>
            </Breadcrumb.Item>
            {activeMenu.id &&
                <Fragment>
                    <Breadcrumb.Item>
                        {activeMenu.parent.name}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={activeMenu.id} replace>{activeMenu.name}</Link>
                    </Breadcrumb.Item>
                </Fragment>
            }
        </Breadcrumb>

        <div className='flex-full'></div>
        <ul className='flex nav-list'>
            {data.link && data.link.map((item, index) => (
                <li key={index}>
                    <Link to={item.path} style={{ color: '#555' }} replace>{item.text}</Link>
                </li>
            ))}
        </ul>

        <Popover
            content={<div>
                {data.oper && data.oper.map((item, index) => (
                    <Selected key={index}>
                        <Icon type={item.icon} color={item.color} />
                        <span>{item.text}</span>
                    </Selected>
                ))}
            </div>}
            placement='bottom'
            trigger={['click']}>
            <div className='user flex flex-center'>
                <img src={require('@/assets/user.jpg')} alt='' className='avatar' />
                <span>{StringFirstToUpper(data.userName + '' || 'error')}</span>
            </div>
        </Popover>
    </Root>
);

const Root = styled.div`
    height: ${p => p.theme.navigation.height};
    background-color: ${p => p.theme.navigation.backgroundColor};
    position: fixed;
    top: 0;
    left: ${p => p.theme.menu.width};
    right: 0;
    box-shadow: 1px 3px 8px rgba(1, 1, 1, 0.06);
    text-shadow: 1px 1px 1px rgba(1, 1, 1, 0.04);
    padding-left: 16px;
    display: flex;
    align-items: center;

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
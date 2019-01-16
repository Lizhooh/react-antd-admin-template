import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

// 页面加载展示组件
export default () => (
    <Root>
        <Icon type='loading' />
    </Root>
);

const Root = styled.div`
    text-align: center;
    padding: 40px;
    margin: 16px;
    background-color: #fff;
`;


import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './app';
import Free from 'mobx-free';

// 加入主题
export default Free.helper('connect')(
    state => ({ theme: state.theme }),
)(({ theme }) => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
));

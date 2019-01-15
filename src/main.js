import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './app';

export default connect(
    state => ({ theme: state.theme }),
)(({ theme }) => (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
));


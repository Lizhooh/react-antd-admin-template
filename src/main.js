import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

export default connect(
    state => ({ root: state, theme: state.theme }),
)(({ theme }) => (
    <ThemeProvider theme={theme}>
        <Router getUserConfirmation={(...arg) => console.log(arg)}>
            <App />
        </Router>
    </ThemeProvider>
));

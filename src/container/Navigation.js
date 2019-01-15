import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/common/Navigation';

export default connect(
    state => ({ state: state.navigate, menu: state.menu }),
)(({ state, menu }) => (
    <Navigation data={state} activeMenu={menu.active} />
));
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateThemeColor } from '../redux/actions/theme';

export default connect(
    state => ({ state: state.index }),
)(class IndexView extends Component {
    render() {
        const { name } = this.props.state;

        return (
            <div style={{ height: 2000 }}>
                <h3>{name}</h3>
                <button onClick={updateThemeColor}>改变颜色</button>
            </div>
        );
    }
});

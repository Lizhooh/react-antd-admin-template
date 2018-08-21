import React, { Component } from 'react';
import Fine from 'redux-fine';
import { connect } from 'react-redux';

export default connect(
    state => ({ state: state.index }),
    Fine.action('index'),
)(class IndexView extends Component {
    render() {
        const { name } = this.props.state;
        const { updateThemeColor } = this.props;


        return (
            <div style={{ height: 2000 }}>
                <h3>{name}</h3>
                <button onClick={updateThemeColor}>改变颜色</button>
            </div>
        );
    }
});

import React, { Component } from 'react';
import Fine from 'redux-fine';
import { connect } from 'react-redux';

export default connect(
    state => ({ state: state.index }),
    Fine.actions('index'),
)(class IndexView extends Component {
    render() {
        const { name } = this.props.state;

        return (
            <div style={{ height: 2000 }}>
                <h3>{name}</h3>
            </div>
        );
    }
});

import React, { Component } from 'react';
import Free from 'mobx-free';

export default Free.helper('connect')(
    state => ({ state: state.index }),
)(class extends Component {
    render() {
        const { name } = this.props.state;

        return (
            <div style={{ height: 2000 }}>
                <h3>{name}</h3>
            </div>
        );
    }
});
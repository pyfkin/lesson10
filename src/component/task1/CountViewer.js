import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CounterViewer = (props) =>
    <div className="card align-items-center">
        <div className="card-body">{props.value}</div>
    </div>;

CounterViewer.propTypes = {
    label: PropTypes.string,
};

export default CounterViewer;
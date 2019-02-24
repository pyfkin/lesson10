import React, { Component } from 'react';
import PropTypes from 'prop-types';


const BeautyButton = (props) =>
{
    const style = {
        flexGrow: '1'
    };
    return (
    <button style={style} className={`btn btn-${props.type}`} onClick={props.onClick}>{props.label}</button>
)
};

    BeautyButton.propTypes = {
        label: PropTypes.string,
        onclick: PropTypes.func,
        type: PropTypes.string,
    };
    export default BeautyButton;
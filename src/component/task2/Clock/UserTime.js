import React from 'react';
import PropTypes from 'prop-types';

const Time = (props) => {
    return (
        <div className="time">{(new Date()).toDateString()}
        </div>
    )
};

export default Time;

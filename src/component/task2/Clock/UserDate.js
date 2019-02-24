import React from 'react';
import PropTypes from 'prop-types';

const UserDate = (props) => {
    return (
        <div className="date">{(new Date()).toDateString()}
        </div>
    )
};

export default UserDate;

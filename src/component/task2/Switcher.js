import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt  } from '@fortawesome/free-solid-svg-icons'

const Switcher = (props) => {
    library.add(faCalendarAlt );
    return (
        <div className="custom-control custom-switch">
            <input onClick={props.onClick} type="checkbox" className="custom-control-input" id="customSwitches"/>
            <label className="custom-control-label" htmlFor="customSwitches">
                <FontAwesomeIcon  icon="calendar-alt"/>
            </label>
        </div>
    )
};

Switcher.propTypes = {
    onClick: PropTypes.func,
};

export default Switcher;

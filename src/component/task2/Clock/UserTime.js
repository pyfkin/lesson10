import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserTime extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return (
            <div className="time">{this.props.time}
            </div>
        )
    }
}



export default UserTime;

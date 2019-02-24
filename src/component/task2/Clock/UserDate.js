import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserDate extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <div className="date">{this.props.date}
            </div>
        )
    }
}

export default UserDate;

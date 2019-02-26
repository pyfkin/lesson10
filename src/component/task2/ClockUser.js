import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserTime from './Clock/UserTime';
import UserDate from './Clock/UserDate';
import './clock.css'

class ClockUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString().normalize()
        });
    }

    render()
    {
        const body = this.props.ishide && <UserDate ishide={this.props.ishide} date={this.state.date}/>;
        return (

            <div className="rounded-circle">
                <UserTime time={this.state.time} />
                {body}
            </div>
        )
    }
}

ClockUser.propTypes = {
    ishide: PropTypes.bool,
};

export default ClockUser;

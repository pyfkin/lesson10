import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            stripBg: ''
        };
        this.style = {
            display: 'block',
            backgroundColor: 'white',
            textAlign: 'center',
            width: '100px',
            height: '25px',
        };
    }

    handleClick() {
        this.setState({ stripBg: 'yellow' });
    }

    render() {
        this.style.backgroundColor = this.state.stripBg;
        return (
            <div>
                <span onClick={this.handleClick.bind(this)} style={this.style}>{this.props.text}</span>
            </div>
        )
    }
}

export default Clock;
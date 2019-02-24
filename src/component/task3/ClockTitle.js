import React from 'react';

class ClockTitle extends React.Component
{
    constructor(props){
        super(props);

        this.style = {
            display: 'block',
            backgroundColor: 'gray',
            textAlign: 'center',
            width: '100px',
            height: '25px',
        };
        this.state ={
            time: props.text,
        }
    }

    _timeChange = () =>{
        this.setState({
            time: this.state.time,
        })
    };

    render()
    {
        return (
            <div>
                <span style={this.style} >{this.props.text}</span>
            </div>
        )
    }
};

export default ClockTitle;
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
    }

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
import React from 'react';

class TimeButton extends React.PureComponent{
    constructor(props)
    {
        super(props);

        this.style = {
            display: 'table-cel',
            textAlign: 'center',
            width: '100px',
            height: '25px',
            verticalAlign: 'middle',
        };
    }

    render()
    {

        return(
        <div>
            <button style={this.style} onClick={this.props.onButtonClick}>{this.props.text}</button>
        </div>
        )
    }
}

export default TimeButton;
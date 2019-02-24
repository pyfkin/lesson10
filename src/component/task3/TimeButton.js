import React from 'react';

class TimeButton extends React.Component{
    constructor(props)
    {
        super(props);
        // this.state ={
        //     text: props.text,
        // };

        this.style = {
            display: 'table-cel',
            textAlign: 'center',
            width: '100px',
            height: '25px',
            verticalAlign: 'middle',
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // console.log(this.state.text);
        this.props.onButtonClick();

    }

    render()
    {

        return(
        <div>
            <button style={this.style} onClick={this.handleClick}>{this.props.text}</button>
        </div>
        )
    }
}

export default TimeButton;
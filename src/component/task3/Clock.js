import React from 'react';

class Clock extends React.PureComponent{
    constructor(props) {
        super(props);
        this.style = {
            display: 'block',
            backgroundColor: 'white',
            textAlign: 'center',
            width: '100px',
            height: '25px',
        };
    }


    componentDidUpdate(){
        console.log(this.props.clockRef['current'].value);
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.props.clockRef} style={this.style} readOnly={true} value={this.props.text}/>
            </div>
        )
    }
}

export default Clock;
import React from 'react';
import withSize from '../../HOC/withSize';

class Clock extends React.Component{
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



    render() {
        console.log(this.props.clockRef);
        return (

            <div>
                <input ref={this.props.clockRef} style={this.style} value={this.props.text}/>
            </div>
        )
    }
}

export default withSize(Clock);
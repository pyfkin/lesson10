import React from 'react';
import TimeButtom from './TimeButton';

class ButtonPanel extends React.Component{
    constructor(props)
    {
        super(props);

        this.state ={
            value: null,
            text: {
                _1: '1',
                _2: '2',
                _3: '3',
                _4: '4',
                _5: '5',
                _6: '6',
                _7: '7',
                _8: '8',
                _9: '9',
                _0: '0',
                reset: '#',
            },
        };

        this.style ={
            display: 'flex',
            flexWrap: 'wrap',
            boxSizing: 'border-box',
            justifyContent: 'flex-start',
            width:'300px',
            textAlign: 'center',
        };

    }

    // _buttonValue = (name) =>{
    //      console.log(name);
    //     this.setState((name) =>{
    //         this.state.value
    //         return this.state.value
    //     })
    // };


    render(){
        return <div style={this.style}>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '1')} text='1'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '2')} text='2'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '3')} text='3'/>

                <TimeButtom onButtonClick={this._handleClick.bind(this, '4')}  text='4'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '5')}  text='5'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '6')}  text='6'/>

                <TimeButtom onButtonClick={this._handleClick.bind(this, '7')}  text='7'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '8')}  text='8'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '9')}  text='9'/>

                <TimeButtom onButtonClick={this._handleClick.bind(this, '#')}  text='#'/>
                <TimeButtom onButtonClick={this._handleClick.bind(this, '0')}  text='0'/>
            </div>

    }

    _handleClick = (number) => {
        this.props.onClick(number)
    }

}

export default ButtonPanel;
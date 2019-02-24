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

        this._buttonValue = this._buttonValue.bind(this);
    }

    _buttonValue = () =>{
        console.log(this.state.value);
        this.setState(() =>{
            return this.state.value
        })
    };


    render(){
        return(
            <div style={this.style}>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._1)} text={this.state.text._1}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._2)} text={this.state.text._2}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._3)} text={this.state.text._3}/>

                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._4)} text={this.state.text._4}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._5)} text={this.state.text._5}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._6)} text={this.state.text._6}/>

                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._7)} text={this.state.text._7}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._8)} text={this.state.text._8}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._9)} text={this.state.text._9}/>

                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text.reset)} text={this.state.text.reset}/>
                <TimeButtom onButtonClick={this._buttonValue.bind(this, this.state.text._0)} text={this.state.text._0}/>
            </div>
        )
    }
}

export default ButtonPanel;
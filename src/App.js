import React, { Component } from 'react';
import './App.css';
import CounterViewer from './component/task1/CountViewer';
import BeautyButton from './component/task1/BeautyButton';
import Switcher from './component/task2/Switcher';
import ClockUser from './component/task2/ClockUser';
import ClockTitle from './component/task3/ClockTitle';
import Clock from './component/task3/Clock';
import ButtonPanel from './component/task3/ButtonPanel';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
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
        counter: 0,
        isHide: false,
        _text: '00',
    };

    this._prevHandler = this._prevHandler.bind(this);
    this._nextHandler = this._nextHandler.bind(this);
    this._resetHandler = this._resetHandler.bind(this);
    this._toggleOnOffDate = this._toggleOnOffDate.bind(this);
  }

  _prevHandler(){
      this.setState({
          counter: this.state.counter - 1
      })
  }

  _nextHandler(){
      this.setState({
          counter: this.state.counter + 1
      })
  }

  _resetHandler(){
      this.setState({
          counter: 0,
      })
  }

  _toggleOnOffDate(){

      this.setState({
          isHide : !this.state.isHide,
      })
  }

  _setTimer = (text) =>
  {
      // console.log(text);
      this.setState(() => ({
        _text : this.state._text + text,
      }))
  }

  render(){
      const style ={
          display: 'flex',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
          justifyContent: 'flex-start',
          width:'300px',
          textAlign: 'center',
      };
      return (
          <div className="row">
              <div className="lesson10-task1 col-md-3">
                  <CounterViewer value={this.state.counter}/>
                  <div className="text-center" style={style}>
                      <BeautyButton label="<" type="danger" onClick={this._prevHandler}/>
                      <BeautyButton label="=" type="warning" onClick={this._resetHandler}/>
                      <BeautyButton label=">" type="success" onClick={this._nextHandler}/>
                  </div>
              </div>
              <div className="lesson10-task2 col-md-3">
                  <Switcher onClick={this._toggleOnOffDate}/>
                  <ClockUser ishide={this.state.isHide}/>
              </div>
              <div className="lesson10-task3 col-md-3">
                  <div style={style}>
                      <ClockTitle text="H"/>
                      <ClockTitle text="M"/>
                      <ClockTitle text="S"/>
                  </div>
                  <div style={style}>
                      <Clock text={this.state._text} onClick={'red'}/>
                      <Clock text={this.state._text}/>
                      <Clock text={this.state._text}/>
                  </div>
                  <div>
                      <ButtonPanel style={style} onClick={this._setTimer.bind(this)}/>
                  </div>
                  <button>START</button>
              </div>
          </div>
      )
  }
}
export default App;

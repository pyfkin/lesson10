import React, { Component } from 'react';
import './App.css';
import CounterViewer from './component/task1/CountViewer';
import BeautyButton from './component/task1/BeautyButton';
import Switcher from './component/task2/Switcher';
import ClockUser from './component/task2/ClockUser';
import ClockTitle from './component/task3/ClockTitle';
import Clock from './component/task3/Clock';
import ButtonPanel from './component/task3/ButtonPanel';



class App extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            value: null,
            counter: 0,
            isHide: false,
            currentActive: 1,
            hour: '00',
            minutes: '00',
            seconds: '00',
        };

        this.inputHour = React.createRef();
        this.inputMinutes = React.createRef();
        this.inputSeconds = React.createRef();


        this._prevHandler = this._prevHandler.bind(this);
        this._nextHandler = this._nextHandler.bind(this);
        this._resetHandler = this._resetHandler.bind(this);
        this._toggleOnOffDate = this._toggleOnOffDate.bind(this);
    }

    _prevHandler()
    {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    _nextHandler()
    {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    _resetHandler()
    {
        this.setState({
            counter: 0,
        })
    }

    _toggleOnOffDate()
    {

        this.setState({
            isHide: !this.state.isHide,
        })
    }

    _setTimer = (text) =>
    {
        //if  (this.state.currentActive === 1)
        this.setState(() => ({

                hour: text
        }))
    };


    componentDidMount()
    {
        this.inputHour.current.focus();
    }

    _handleLeft()
    {
        if (this.inputSeconds.current.focus){
            //this.state.currentActive = 2;
            console.log('3');
            this.inputMinutes.current.focus();
        } else if (this.inputMinutes.current.focus){
           // this.state.currentActive = 1;
            console.log('4');
            this.inputHour.current.focus();
        }
    }

    _handleRight()
    {
        if (this.inputHour.current.focus){
            console.log('1');
           // this.state.currentActive = 2;
            this.inputMinutes.current.focus();
        } else if (this.inputMinutes.current.focus){
            //this.state.currentActive = 3;
            console.log('2');
            this.inputSeconds.current.focus();
        }
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
                      <Clock text={this.state.hour} clockRef={this.inputHour} />
                      <Clock text={this.state.minutes} clockRef={this.inputMinutes}/>
                      <Clock text={this.state.seconds} clockRef={this.inputSeconds}/>
                  </div>
                  <div>
                      <ButtonPanel style={style} handleLeft={this._handleLeft.bind(this)}
                                                 handleRight={this._handleRight.bind(this)}
                                                 onClick={this._setTimer.bind(this)}
                      />
                  </div>
                  <button>START</button>
              </div>
          </div>
      )
  }
}
export default App;

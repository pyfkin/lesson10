import React from 'react';

import ClockTitle from "./ClockTitle";
import Clock from "./Clock";
import ButtonPanel from "./ButtonPanel";

class TimerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActive: 1,
            hour: '',
            minutes: '',
            seconds: '',
            isHideTimerInput: false,
        };

        this.inputHour = React.createRef();
        this.inputMinutes = React.createRef();
        this.inputSeconds = React.createRef();
    }

    componentDidMount() {
        this.inputHour.current.focus();
    }

    _setTimer = (text) => {
        switch (this.state.currentActive) {
            case 1:
                if (this.state.hour.length > 1) {
                    this._setCurrenActive(2);
                    this.inputMinutes.current.focus();
                    // this.setState({
                    //     hour: text
                    // });
                } else {
                    this.setState({
                        hour: this.state.hour + text
                    });
                }
                break;
            case 2:
                if (this.state.minutes.length > 1) {
                    this._setCurrenActive(3);
                    this.inputSeconds.current.focus();
                    // this.setState({
                    //     minutes: text
                    // });
                } else {
                    this.setState(() => ({
                        minutes: this.state.minutes + text
                    }));
                }
                break;
            case 3:
                if (this.state.seconds.length >= 2) {
                    this.setState({
                        seconds: text
                    });
                } else {
                    this.setState(() => ({
                        seconds: this.state.seconds + text
                    }));
                }
                break;
            default:
                console.log('default');
                break;
        }
    };

    _handleLeft() {
        if (this.state.currentActive === 3) {
            this._setCurrenActive(2);
            this.inputMinutes.current.focus();
        } else if (this.state.currentActive === 2) {
            this._setCurrenActive(1);
            this.inputHour.current.focus();
        }
    }

    _handleRight() {
        if (this.state.currentActive === 1) {
            this._setCurrenActive(2);
            this.inputMinutes.current.focus();
        } else if (this.state.currentActive === 2) {
            this._setCurrenActive(3);
            this.inputSeconds.current.focus();
        }
    }

    _setCurrenActive(index) {
        this.setState({
            currentActive: index
        })
    }

    _hideTimerInput = (q) => {
        console.log(q);
        this.setState({
            isHideTimerInput: !this.state.isHideTimerInput
        })
    };

    render() {
        const style = {
            display: 'flex',
            flexWrap: 'wrap',
            boxSizing: 'border-box',
            justifyContent: 'flex-start',
            width: '300px',
            textAlign: 'center',
        };
        return (
            <div>
                <div style={style}>
                    <ClockTitle text="H"/>
                    <ClockTitle text="M"/>
                    <ClockTitle text="S"/>
                </div>
                <div style={style}>
                    <Clock text={this.state.hour} clockRef={this.inputHour}/>
                    <Clock text={this.state.minutes} clockRef={this.inputMinutes}/>
                    <Clock text={this.state.seconds} clockRef={this.inputSeconds}/>
                </div>
                <div>
                    <ButtonPanel style={style}  handleLeft={this._handleLeft.bind(this)}
                                                handleRight={this._handleRight.bind(this)}
                                                onClick={this._setTimer.bind(this)}
                    />
                </div>
                <button onClick={this.props.onClick}>START</button>
            </div>
        )
    }
}

export default TimerInput;
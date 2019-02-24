import React from 'react';

const Clock = (props) =>
{
    const style = {
        display: 'block',
        backgroundColor: 'white',
        textAlign: 'center',
        width: '100px',
        height: '25px',
    };
    return(
        <div>
            <span style={style}>{props.text}</span>
        </div>
    )
};

export default Clock;
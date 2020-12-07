import React from 'react';
import './Display.css';

const display = (props) => {

    let numberDisplay = props.number
       
    return(
        <div className="display__screen">
            {
                props.number ? <p>{numberDisplay}</p> : <p>0</p>
            }
        </div>
    )
}

export default display;
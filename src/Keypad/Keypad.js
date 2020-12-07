import React from 'react';
import './Keypad.css';


const keypad = (props) => {

    let clickFunction;
    if(props.numberLength > 0 || props.numberLength <= 13){
        clickFunction = props.clickButton
    }

    return(
        <div className="button">
            <button 
                className="btn-color__grey"
                name="AC"
                onClick= {clickFunction}
            >AC
            </button>
            <button 
                className="btn-color__grey"
                name="+/-"
                onClick= {clickFunction}
            >+/-
            </button>
            <button 
                className="btn-color__grey"
                name="%"
                onClick= {clickFunction}
            >%
            </button>
            <button 
                className="btn-color__orange"
                name="/"
                onClick= {clickFunction}
            >÷
            </button>

            <button 
                className="btn-color__darkgrey"
                name = "7"
                onClick= {clickFunction}
            >7
            </button>
            <button 
                className="btn-color__darkgrey"
                name="8"
                onClick= {clickFunction}
            >8
            </button>
            <button 
                className="btn-color__darkgrey"
                name="9"
                onClick= {clickFunction}
            >9
            </button>
            <button 
                className="btn-color__orange"
                name="*"
                onClick= {clickFunction}
            >X
            </button>

            <button 
                className="btn-color__darkgrey"
                name="4"
                onClick= {clickFunction}
            >4
            </button>
            <button 
                className="btn-color__darkgrey"
                name="5"
                onClick= {clickFunction}
            >5
            </button>
            <button 
                className="btn-color__darkgrey"
                name="6"
                onClick= {clickFunction}
            >6
            </button>
            <button 
                className="btn-color__orange"
                name="-"
                onClick= {clickFunction}
            >-
            </button>

            <button 
                className="btn-color__darkgrey"
                name="1"
                onClick= {clickFunction}
            >1
            </button>
            <button 
                className="btn-color__darkgrey"
                name="2"
                onClick= {clickFunction}
            >2
            </button>
            <button 
                className="btn-color__darkgrey"
                name="3"
                onClick= {clickFunction}
            >3
            </button>
            <button 
                className="btn-color__orange"
                name="+"
                onClick= {clickFunction}
            >+
            </button>

            <button 
                className="zero-btn"
                name="0"
                onClick= {clickFunction}
            >0
            </button>
            <button 
                className="btn-color__darkgrey"
                name="."
                onClick= {clickFunction}
            >.
            </button>
            <button 
                className="btn-color__orange"
                name="="
                onClick= {clickFunction}
            >=
            </button>
        </div>
    )
}

export default keypad;
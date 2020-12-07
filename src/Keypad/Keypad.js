import React from 'react';
import './Keypad.css';


const keypad = (props) => {

    let clickNumbers;
    let clickOperators;
    if(props.numberLength < 9){
        clickNumbers = props.clickButton;
    }
    
    clickOperators = props.clickButton;

    let btnName = "AC";
    if(props.clearable){
        btnName = "C";
    }

    return(
        <div className="button">
            <button 
                className="btn-color__grey"
                name= {btnName}
                onClick= {clickOperators}
            > {btnName}
            </button>
            <button 
                className="btn-color__grey"
                name="+/-"
                onClick= {clickOperators}
            >+/-
            </button>
            <button 
                className="btn-color__grey"
                name="%"
                onClick= {clickOperators}
            >%
            </button>
            <button 
                className="btn-color__orange"
                name="/"
                onClick= {clickOperators}
            >÷
            </button>

            <button 
                className="btn-color__darkgrey"
                name = "7"
                onClick= {clickNumbers}
            >7
            </button>
            <button 
                className="btn-color__darkgrey"
                name="8"
                onClick= {clickNumbers}
            >8
            </button>
            <button 
                className="btn-color__darkgrey"
                name="9"
                onClick= {clickNumbers}
            >9
            </button>
            <button 
                className="btn-color__orange"
                name="*"
                onClick= {clickOperators}
            >X
            </button>

            <button 
                className="btn-color__darkgrey"
                name="4"
                onClick= {clickNumbers}
            >4
            </button>
            <button 
                className="btn-color__darkgrey"
                name="5"
                onClick= {clickNumbers}
            >5
            </button>
            <button 
                className="btn-color__darkgrey"
                name="6"
                onClick= {clickNumbers}
            >6
            </button>
            <button 
                className="btn-color__orange"
                name="-"
                onClick= {clickOperators}
            >-
            </button>

            <button 
                className="btn-color__darkgrey"
                name="1"
                onClick= {clickNumbers}
            >1
            </button>
            <button 
                className="btn-color__darkgrey"
                name="2"
                onClick= {clickNumbers}
            >2
            </button>
            <button 
                className="btn-color__darkgrey"
                name="3"
                onClick= {clickNumbers}
            >3
            </button>
            <button 
                className="btn-color__orange"
                name="+"
                onClick= {clickOperators}
            >+
            </button>

            <button 
                className="zero-btn"
                name="0"
                onClick= {clickNumbers}
            >0
            </button>
            <button 
                className="btn-color__darkgrey"
                name="."
                onClick= {clickNumbers}
            >.
            </button>
            <button 
                className="btn-color__orange"
                name="="
                onClick= {clickOperators}
            >=
            </button>
        </div>
    )
}

export default keypad;
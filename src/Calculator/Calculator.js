import React, { Component } from 'react';
import Calculation from '../Calculation';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';


class result extends Component {
    state = { 
        number: "",
    }

    buttonClickHandler = (event) => {
       console.log("Button clicked")
    }
    
    render() { 
        return ( 
            <div>
                <Display 
                    number={this.state.number} 
                />
                <Keypad 
                    clickButton={(event) => this.buttonClickHandler(event)} 
                    numberLength= {this.state.number.length}
                />
            </div>
         );
    }
}
 
export default result;
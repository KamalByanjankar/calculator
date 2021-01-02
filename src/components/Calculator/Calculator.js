import React, { Component } from 'react';
import Calculation from '../Calculation/Calculation';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';


class result extends Component {
    state = { 
        number: "",
        calculation: new Calculation(),
    }

    buttonClickHandler = (event) => {
        let input = event.target.name
        console.log(input)
        this.setState({
            number: this.state.calculation.calculate(input)
        })
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
                    clearable = {this.state.calculation.clearable}
                />
            </div>
         );
    }
}
 
export default result;
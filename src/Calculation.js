class Calculation{
    constructor(){
        this.number = ""

        this.previousNumber = null;
        this.repeatNumber = null;
        this.previousInput = null;
        this.previousOperation = null;
        this.repeatOperation = null;
        this.clearable = false;

        this.operationEnums = {
            clearAll: "AC",
            clear: "C",
            addition: "+",
            substraction: "-",
            multiplication: "*",
            division: "/",
            equal: "=",
        }
    }

    calculate(input){
        if(this.isDigit(input)){
            return this.handleDigitInput(input);
        }

        if(this.isOperation(input)){
            return this.handleOperationInput(input);
        }

        return "Error";
    }

    handleDigitInput(input){
        this.clearable = true;

        if(this.isOperation(this.previousInput)){
            this.number= "";
        }

        if(input === "." && this.number.includes(".")){
            return this.number;
        }

        if(input === "." && this.number === ""){
            this.number = "0.";
            return this.number;
        }

        this.number += input;
        this.previousInput = input;
        return this.removeZero(this.number);   
    }

    isDigit(input){
        return !isNaN(input) || input === ".";
    }

    isOperation(input){
        return Object.values(this.operationEnums).includes(input);
    }

    removeZero(number){
        if(number.length > 1 && number[0] === "0" && number[1] !== "."){
            this.number = number.slice(1)
            return this.number;
        }
        
        return number;
    }


    handleOperationInput(input){
        if(input === this.operationEnums.addition){
            return this.handleMathOperation(input);
        }

        if(input === this.operationEnums.clearAll){
            return this.handleClearAllOperation();
        }

        if(input === this.operationEnums.clear){
            return this.handleClearOperation();
        }
    }

    updatePreviousStatus(number, input){
        this.previousInput = input;
        this.previousNumber = number;
        this.previousOperation = input;
    }

    handleMathOperation(input) {
        this.repeatNumber = null;
        this.repeatOperation = null;
    
        if (this.previousNumber == null) {
          this.updatePreviousStatus(this.number, input);
    
          return this.number;
        } else {
          let temp = this.previousInput;
          this.previousInput = input;
    
          if (
            temp !== input &&
            this.previousOperation !== this.operationEnums.equal &&
            temp !== "="
          ) {
            if (this.previousOperation === this.operationEnums.addition) {
              this.number = this.add(this.previousNumber, this.number);
            }
    
            this.updatePreviousStatus(this.number, input);
    
            return this.number;
          } else {
            this.updatePreviousStatus(this.number, input);
    
            return this.number;
          }
        }
    }

    add(previousNumber, number){
        return (parseFloat(previousNumber) + parseFloat(number)).toString();
    }

    handleClearOperation() {
        this.number= "";
        this.clearable = false;
    
        return "0";
      }
    
      handleClearAllOperation() {
        this.number = "";
        this.previousInput = null;
        this.previousNumber = null;
        this.previousOperation = null;
        this.repeatNumber = null;
        this.repeatOperation = null;
        this.clearable = false;
    
        return "0";
      }
}

export default Calculation;
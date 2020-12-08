class Calculation{
    constructor(){
        this.number = "";

        this.clearable = false;
        this.previousInput = null;
        this.previousNumber = null;
        this.repeatNumber = null;
        this.previousOperation = null;
        this.repeatOperation = null;

        this.operationEnums = {
            allClear : "AC",
            clear : "C",
            addition : "+",
            substraction : "-",
            multiplication : "*",
            division : "/",
            percentage : "%",
            changeSign : "+/-",
            equal : "=",
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

    isDigit(input){
        return !isNaN(input) || input === ".";
    }

    isOperation(input){
        return Object.values(this.operationEnums).includes(input);
    }

    handleDigitInput(input){
        this.clearable = true;

        if(this.isOperation(this.previousInput)){
            this.number = "";
        }

        if(input === "." && this.containsDecimalPoint(this.number)){
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

    containsDecimalPoint(number){
        return number.includes(".");
    }

    removeZero(number){
        if(number.length > 1 && number[0] === "0" && number[1] !== "."){
            this.number = number.slice(1);
            return this.number;
        }

        return number;
    }

    handleOperationInput(input){
        if(input === this.operationEnums.addition ||
            input === this.operationEnums.substraction ||
            input === this.operationEnums.multiplication ||
            input === this.operationEnums.division
        ){
            return this.handleMathOperation(input);
        }

        if(input === this.operationEnums.percentage){
            return this.handlePercentageOperation();
        }

        if(input === this.operationEnums.changeSign){
            return this.handleSignChangeOperation();
        }
    }

    updatePreviousState(number, input){
        this.previousInput = input;
        this.previousNumber = number; 
        this.previousOperation = input;
    }

    handleMathOperation(input){
        this.repeatNumber = null;
        this.repeatOperation = null;

        if(this.previousNumber === null){
            this.updatePreviousState(this.number, input);
            return this.number;
        }
        else{
            let temp = this.previousInput;
            this.previousInput = input;

            if(temp !== input && 
                this.previousOperation !== this.operationEnums.equal &&
                temp !== "="
            ){
                if(this.previousOperation === this.operationEnums.addition){
                    this.number = this.add(this.previousNumber, this.number);
                }

                if(this.previousOperation === this.operationEnums.substraction){
                    this.number = this.substract(this.previousNumber, this.number);
                }

                if(this.previousOperation === this.operationEnums.multiplication){
                    this.number = this.multiply(this.previousNumber, this.number);
                }

                if(this.previousOperation === this.operationEnums.division){
                    this.number = this.divide(this.previousNumber, this.number);
                }

                this.updatePreviousState(this.number, input);
                return this.number;
            }
            else{
                this.updatePreviousState(this.number, input);
                return this.number;
            }
        }
    }

    add(previousNumber, number){
        return (parseFloat(previousNumber) + parseFloat(number)).toString();
    }

    substract(previousNumber, number){
        return (parseFloat(previousNumber) - parseFloat(number)).toString();
    }

    multiply(previousNumber, number){
        return (parseFloat(previousNumber) * parseFloat(number)).toString();
    }

    divide(previousNumber, number){
        return (parseFloat(previousNumber) / parseFloat(number)).toString();
    }

    handlePercentageOperation(){
        if(this.number === ""){
            this.number = "0";
        }

        this.number = this.percentage(this.number);
        return this.number;
    }

    percentage(number){
        return (parseFloat(number) / 100).toString();
    }

    handleSignChangeOperation(){
        if(this.number === ""){
            this.number = "0";
        }

        this.number = this.change(this.number);

        return this.number;
    }

    change(number){
        return (parseFloat(number) * -1).toString();
    }
}

export default Calculation;
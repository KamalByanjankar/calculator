class Calculation{
    constructor(){
        this.number = ""

        this.clearable = false;
    }

    calculate(input){
        if(!isNaN(input) || input === "."){
            return this.handleDigitInput(input);
        }

        else{
            return "Error";
        }
    }

    handleDigitInput(input){
        this.clearable = true;

        if(input === "." && this.number.includes(".")){
            return this.number;
        }

        if(input === "." && this.number === ""){
            this.number = "0.";
            return this.number;
        }

        this.number += input;
        return this.removeZero(this.number);   
    }

    removeZero(number){
        if(number.length > 1 && number[0] === "0" && number[1] !== "."){
            this.number = number.slice(1)
            return this.number;
        }
        
        else{
            return this.number;
        }
    }
}

export default Calculation;
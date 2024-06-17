/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector(".display")

const currentEquation = {
    calculatorDisplay:"",
    valueOne:"",
    currentOpporator:"",
    valueTwo:"",
    firstValue: true,
    sumJustRan: false,
    handleNumber(inputNumber) {
        if (this.sumJustRan && !this.firstValue){
            this.clearEquation();
        }
        if (this.firstValue){
            this.valueOne += inputNumber;
        } else{
            this.valueTwo += inputNumber;
        }
    this.calculatorDisplay += inputNumber;
    this.updateDisplay();
    },
    // using oppString because .runequation clears display so + wasn't adding
    handleOpporator(inputOpporator, oppString) {
        if (this.valueOne && this.valueTwo && this.currentOpporator){
            this.valueOne = this.runEquation();
            this.sumJustRan = false;
            this.valueTwo = "";
        }
        else if (this.currentOpporator || !this.valueOne){
            this.clearEquation()
            return
        }
        if (this.valueOne && !this.valueTwo){
            this.currentOpporator = inputOpporator;
            this.firstValue = false;
        }
    this.calculatorDisplay += oppString;
    this.updateDisplay();
    },
    runEquation() {
        if (this.valueOne && this.valueTwo && this.currentOpporator){
            this.calculatorDisplay = this.currentOpporator(Number(this.valueOne),Number(this.valueTwo));
            this.updateDisplay();
            this.sumJustRan = true;
            return this.calculatorDisplay;
        }
        return "Missing Opporators"
    },
    clearEquation() {
        this.calculatorDisplay = ""
        this.valueOne = "";
        this.currentOpporator = "";
        this.valueTwo = "";
        this.firstValue = true;
        this.sumJustRan = false;
        this.updateDisplay();
    },
    updateDisplay() {
        display.textContent = this.calculatorDisplay;
    }
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector("#calculator");
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (e) => {
    switch (e.target.textContent){
        case "0":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "1":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "2":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "3":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "4":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "5":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "6":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "7":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "8":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "9":
            currentEquation.handleNumber(e.target.textContent);
            break;
        case "/":
            currentEquation.handleOpporator(divide," / ");
            break;
        case "*":
            currentEquation.handleOpporator(multiply," * ");
            break;
        case "-":
            currentEquation.handleOpporator(subtract," - ");
            break;
        case "+":
            currentEquation.handleOpporator(add," + ");
            break;
        case "=":
            currentEquation.runEquation();
            break;
        case "C":
            currentEquation.clearEquation();
            break;
    }
});
/*-------------------------------- Functions --------------------------------*/


import { getSuggestedQuery } from "@testing-library/react";
import React from "react";
import './Calculator.css'

class Calculator extends React.Component{
    constructor(){
        super()
        this.state = {
            displayValue: "0",
            storedValue: "0",
            storedCalculationSymbol: "",
            ButtonOneHover: false,
            ButtonTwoHover: false,
            ButtonThreeHover: false,
            ButtonFourHover: false,
            ButtonFiveHover: false,
            ButtonSixHover: false,
            ButtonSevenHover: false,
            ButtonEightHover: false,
            ButtonNineHover: false,
            ButtonZeroHover: false,
            ButtonDecimalHover: false,
            ButtonEqualsHover: false,
            ButtonAddHover: false,
            ButtonSubtractHover: false,
            ButtonMultiplyHover: false,
            ButtonDivideHover: false,
            ButtonClearHover: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleCalculation = this.handleCalculation.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleEquals = this.handleEquals.bind(this)
        this.handleDecimal = this.handleDecimal.bind(this)
        this.handleHover = this.handleHover.bind(this)
        this.handleRepeaterBox = this.handleRepeaterBox.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleClick(event){
        const {name, value} = event.target
        this.setState( (prevState) => {
            if(prevState.displayValue !== "0"){
                return{
                    displayValue: prevState.displayValue+value
                }
            }
            else{
                return{
                    displayValue: value
    
                }
             }
        })
    }
    handleCalculation(event){
        const value = event.target.value
          this.setState( prevState => {
            if(prevState.storedValue === "0"){
                return{
                    displayValue: "0",
                    storedValue: prevState.displayValue,
                    storedCalculationSymbol: value
                }
            }
            return{
                displayValue: "0",
                storedValue: eval(prevState.storedValue + prevState.storedCalculationSymbol + prevState.displayValue),
                storedCalculationSymbol: value
            }
        }) 

    }
    
    

    handleClear(){
        this.setState({
            displayValue: "0",
            storedValue: "0",
            storedCalculationSymbol: ""
        })
    }
    handleEquals(){
    
        this.setState(prevState => {
            if(prevState.storedCalculationSymbol === "final"){
                return{
                    displayValue: "0",
                    storedValue: "0",
                    storedCalculationSymbol: ""
                }
            }
            else if (prevState.storedCalculationSymbol === ""){
                return{
                    displayValue: prevState.displayValue,
                    storedValue: "0",
                    storedCalculationSymbol: ""
                }
            }
            else{
                return{
                displayValue: eval(prevState.storedValue + prevState.storedCalculationSymbol + prevState.displayValue),
                storedValue: "0",
                storedCalculationSymbol: "final"
                }
            }
        })
    }

    handleDecimal(){
        this.setState( prevState => {
            if(prevState.displayValue.includes(".")){
               return{
                displayValue: prevState.displayValue,
                storedValue: prevState.storedValue,
                storedCalculationSymbol: prevState.storedCalculationSymbol
               } 
            }
            else {
                return{
                    displayValue: prevState.displayValue + ".",
                    storedValue: prevState.storedValue,
                    storedCalculationSymbol: prevState.storedCalculationSymbol
                   }
            }
            // else{
            //     return{
            //         displayValue: prevState.displayValue,
            //         storedValue: prevState.storedValue,
            //         storedCalculationSymbol: prevState.storedCalculationSymbol
            //        }
            // }
        })
    }
    handleHover(event){
        var first = "Button"
        var second = event.target.id
        var third = "Hover"
        const ButtonName = first.concat(second,third)
        // var [ButtonName] = 'Button'+ new String(event.target.id)+ 'Hover'
        // alert([ButtonName])
        this.setState( prevState => {
            return{
            [ButtonName]: !prevState[ButtonName]
            }
        })
           
    }
    handleRepeaterBox(){
        if(this.state.storedCalculationSymbol !== "final"){
            return ""
        }
        else{
            return this.state.storedValue + " " + this.state.storedCalculationSymbol
        }
        // this.state.storedCalculationSymbol !== "final" ? this.state.storedValue + " " + this.state.storedCalculationSymbol: ""
    }
    render(){
        const ButtonOneClass = this.state.ButtonOneHover ? "generic-button-hover" : "generic-button";
        const ButtonTwoClass = this.state.ButtonTwoHover ? "generic-button-hover" : "generic-button";
        const ButtonThreeClass = this.state.ButtonThreeHover ? "generic-button-hover" : "generic-button";
        const ButtonFourClass = this.state.ButtonFourHover ? "generic-button-hover" : "generic-button";
        const ButtonFiveClass = this.state.ButtonFiveHover ? "generic-button-hover" : "generic-button";
        const ButtonSixClass = this.state.ButtonSixHover ? "generic-button-hover" : "generic-button";
        const ButtonSevenClass = this.state.ButtonSevenHover ? "generic-button-hover" : "generic-button";
        const ButtonEightClass = this.state.ButtonEightHover ? "generic-button-hover" : "generic-button";
        const ButtonNineClass = this.state.ButtonNineHover ? "generic-button-hover" : "generic-button";
        const ButtonDecimalClass = this.state.ButtonDecimalHover ? "generic-button-hover" : "generic-button";
        const ButtonZeroClass = this.state.ButtonZeroHover ? "generic-button-hover" : "generic-button";
        const ButtonAddClass = this.state.ButtonAddHover ? "generic-button-hover" : "generic-button";
        const ButtonSubtractClass = this.state.ButtonSubtractHover ? "generic-button-hover" : "generic-button";
        const ButtonMultiplyClass = this.state.ButtonMultiplyHover ? "generic-button-hover" : "generic-button";
        const ButtonDivideClass = this.state.ButtonDivideHover ? "generic-button-hover" : "generic-button";
        const ButtonEqualsClass = this.state.ButtonEqualsHover ? "generic-button-hover" : "generic-button";
        const ButtonClearClass = this.state.ButtonClearHover ? "generic-button-hover" : "generic-button";

        return(
            <div className="full-page">
                <div className = "container">
                    <div className="row-0"> 
                        <label className="repeater-box" id="repeater">{
                         this.state.storedCalculationSymbol !== "final" && this.state.storedValue !== "0" ? this.state.storedValue + " " + this.state.storedCalculationSymbol: "" }</label>
                    </div>
                    <div className="row-1">
                        <input className="display-box" id="display" name="displayValue" onChange= {this.handleChange} value={this.state.displayValue} readOnly/>
                    </div>
                    <div className="row-2">
                        <button className={ButtonOneClass} id="One" onClick={this.handleClick} onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="1">1</button>
                        <button className={ButtonTwoClass} id="Two" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="2">2</button>
                        <button className={ButtonThreeClass} id="Three" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="3">3</button>
                        <button className={ButtonAddClass} id="Add" onClick={this.handleCalculation}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="+">+</button>
                        <button className="invisible-space-1"></button>
                    </div>
                    <div className="row-3">
                        <button className={ButtonFourClass} id="Four" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="4">4</button>
                        <button className={ButtonFiveClass} id="Five" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="5">5</button>
                        <button className={ButtonSixClass} id="Six" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="6">6</button>
                        <button className={ButtonSubtractClass} id="Subtract" onClick={this.handleCalculation}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="-">-</button>
                        <button className="invisible-space-2"></button>
                    </div>
                    <div className="row-4">
                        <button className={ButtonSevenClass} id="Seven" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="7">7</button>
                        <button className={ButtonEightClass} id="Eight" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="8">8</button>
                        <button className={ButtonNineClass} id="Nine" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="9">9</button>
                        <button className={ButtonMultiplyClass} id="Multiply" onClick={this.handleCalculation}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="*">x</button>
                        <button className="invisible-space-3" id="test"></button>
                    </div>
                    <div className="row-5">
                        <button className={ButtonDecimalClass} id="Decimal" onClick={this.handleDecimal}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value=".">.</button>
                        <button className={ButtonZeroClass} id="Zero" onClick={this.handleClick}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="0">0</button>
                        <button className={ButtonClearClass} id="Clear" onClick={this.handleClear}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="C">C</button>
                        <button className={ButtonDivideClass} id="Divide" onClick={this.handleCalculation}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="/">/</button>
                        <button className={ButtonEqualsClass} id="Equals" onClick={this.handleEquals}onMouseEnter= {this.handleHover} onMouseLeave = {this.handleHover}value="=">=</button>
                    </div>
            
                    {/* <h1>{this.state.storedValue}</h1> */}
                </div>
            </div>
        )
    }

}

export default Calculator;
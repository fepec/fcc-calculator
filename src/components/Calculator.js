import React from 'react'
import { useEffect, useState } from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import Display from './Display'
import SecondaryDisplay from './SecondaryDisplay'

export default function Calculator() {
    // state
    const [displayValue, setDisplayValue] = useState("0")
    const [firstValue, setFirstValue] = useState(0)
    const [secondValue, setSecondValue] = useState(0)
    const [activeOperation, setActiveOperation] = useState("")
    const [resetOnNextDigit, setResetOnNextDigit] = useState(false)
    const [negateSecondValue, setNegateSecondValue] = useState(false)
    const [lastKeypressType, setLastKeypressType] = useState("")

    // event handler functions
    function handleNumberClick(e) {
        if (resetOnNextDigit) {
            setDisplayValue(String(e.target.innerHTML))
            setResetOnNextDigit(false)
        } else {
            appendToDisplay(e.target.innerHTML)
        }
        setLastKeypressType("num")
    }

    function handleOperationClick(e) {
        
        if (lastKeypressType === "op" && e.target.innerHTML === "-") {
            setNegateSecondValue(true)
        } else if (lastKeypressType === "op") {
            setNegateSecondValue(false);
            setActiveOperation(e.target.innerHTML)

        } else if (firstValue ) {
            // if firstValue (there is a first value and active operation set), then execute operation and display result.
            let operationResult = executeOperation(firstValue, Number(displayValue), activeOperation)
            setDisplayValue(operationResult)
            setFirstValue(operationResult)
            setActiveOperation(e.target.innerHTML)
        } else {
            setFirstValue(Number(displayValue))
            setActiveOperation(e.target.innerHTML)
        }
        setResetOnNextDigit(true)
        setLastKeypressType("op")
    }

    function handleClearClick() {
        setDisplayValue("0");
        setFirstValue(0)
        setSecondValue(0)
        setActiveOperation("")
        setNegateSecondValue(false);
    }

    function handleDecimalClick() {
        if (displayValue.match(/\./g) == null) {
            let valueArray = displayValue.split('')
            valueArray.push(".")
            setDisplayValue(valueArray.join(''))
        }
    }

    function handleEqualsClick() {
        console.log("dv", displayValue)
        setSecondValue(Number(displayValue))
        setResetOnNextDigit(true)
        let v2 = Number(displayValue)
        console.log("sv", v2)
        // console.log(firstValue, secondValue, activeOperation)
        let operationResult = executeOperation(firstValue, v2, activeOperation)
        console.log(operationResult)
        setDisplayValue(String(operationResult))
        setFirstValue(0);
        // setSecondValue(0);
        setActiveOperation("")
        setLastKeypressType("")
    }
    // support functions (I may move these into the functions above later)
    function appendToDisplay(value) {
        let valueArray = displayValue.split('')

        if (valueArray.length == 1 && valueArray[0] == "0") {
            valueArray = [value]
        } else {
            valueArray.push(value)
        }

        setDisplayValue(valueArray.join(''))
    }

    function executeOperation(v1, v2, operation) {
        let result
        let negator = negateSecondValue ? -1 : 1
        switch (operation) {
            case "+":
                result = v1 + v2 * negator;
                break;
            case "-":
                result = v1 - v2 * negator;
                break;
            case "*":
                result = v1 * v2 * negator
                break;
            case "/":
                result = v2 === 0 ? "ERROR" : v1 / v2 * negator;
                break;
        }
        setNegateSecondValue(false)
        return result
    }

    let numpad = []

    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 1; j <= 3; j++) {
            row.push(<NumberButton key={i * 3 + j} k={i * 3 + j} onNumberButtonClick={handleNumberClick} />)
        }
        numpad.push(<div key={"numpadrow" + i} className="num-row d-flex justify-content-end" >
            {row}
        </div>)
    }
    numpad.push(<div key={"numpadrow" + 4} className="num-row d-flex justify-content-end">
        <OperationButton operation="clear" onOperationButtonClick={handleClearClick} />
        <NumberButton key={0} k={0} onNumberButtonClick={handleNumberClick} />
        <OperationButton operation="decimal" onOperationButtonClick={handleDecimalClick} />
    </div>)

    return <div className="container">
        <div className="d-flex align-items-end justify-content-center">

            <div className='numpad'>
                <Display text={displayValue} />
                {numpad}
            </div>
            <div className="operation-pad d-flex flex-column">
                <OperationButton operation="divide" onOperationButtonClick={handleOperationClick} />
                <OperationButton operation="multiply" onOperationButtonClick={handleOperationClick} />
                <OperationButton operation="subtract" onOperationButtonClick={handleOperationClick} />
                <OperationButton operation="add" onOperationButtonClick={handleOperationClick} />
                <OperationButton operation="equals" onOperationButtonClick={handleEqualsClick} />
            </div>
        </div>
    </div>


}



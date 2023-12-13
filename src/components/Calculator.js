import React from 'react'
import { useEffect, useState } from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import Display from './Display'

export default function Calculator() {
    // state
    const [displayValue, setDisplayValue] = useState("0")
    const [firstValue, setFirstValue] = useState(0)
    const [activeOperation, setActiveOperation] = useState("")
    const [secondValue, setSecondValue] = useState(0)

    // event handler functions
    function handleNumberClick(e) {
        let valueArray = displayValue.split('')
        if (valueArray.length == 1 && valueArray[0] == "0") {
            valueArray = [e.target.innerHTML]
        } else {
            valueArray.push(e.target.innerHTML)
        }
        setDisplayValue(valueArray.join(''))
    }

    function handleOperationClick(e) {
        setFirstValue(Number(displayValue))
        console.log(e.target.innerHTML)
    }

    function handleClearClick() {
        setDisplayValue("0");
        setFirstValue(0)
        setSecondValue(0)
        setActiveOperation("")
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
        <OperationButton operation="decimal" onOperationButtonClick={handleOperationClick} />
    </div>)

    return <div className="container d-flex align-items-end justify-content-center">

        <div className='numpad'>
            <Display text={displayValue} />
            {numpad}
        </div>
        <div className="operation-pad d-flex flex-column">
            <OperationButton operation="divide" onOperationButtonClick={handleOperationClick} />
            <OperationButton operation="multiply" onOperationButtonClick={handleOperationClick} />
            <OperationButton operation="subtract" onOperationButtonClick={handleOperationClick} />
            <OperationButton operation="add" onOperationButtonClick={handleOperationClick} />
            <OperationButton operation="equals" onOperationButtonClick={handleOperationClick} />
        </div>
    </div>


}
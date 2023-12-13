import React from 'react'
import { useEffect, useState } from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import Display from './Display'

export default function Calculator() {
    // state
    const [displayValue, setDisplayValue ] = useState(0)

    // event handler functions
    function handleNumberClick(e) {
        console.log(Number(e.target.innerHTML))
    } 
    
    function handleOperationClick(e) {
        console.log(e.target.innerHTML)
    }


    let numpad = []

    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 1; j <= 3; j++) {
            row.push(<NumberButton key={i * 3 + j} k={i * 3 + j} onNumberButtonClick={handleNumberClick}/>)
        }
        numpad.push(<div key={"numpadrow" + i} className="num-row d-flex justify-content-end" >
            {row}
        </div>)
    }
    numpad.push(<div key={"numpadrow" + 4} className="num-row d-flex justify-content-end">
        <OperationButton operation="clear" onOperationButtonClick={handleOperationClick}/>
        <NumberButton key={0} k={0} onNumberButtonClick={handleNumberClick} />
        <OperationButton operation="decimal" onOperationButtonClick={handleOperationClick}/>
    </div>)

    return <div className="container d-flex align-items-end justify-content-center">
        
            <div className='numpad'>
            <Display text={displayValue} />
                {numpad}
            </div>
            <div className="operation-pad d-flex flex-column">
                <OperationButton operation="divide" onOperationButtonClick={handleOperationClick} />
                <OperationButton operation="multiply" onOperationButtonClick={handleOperationClick}/>
                <OperationButton operation="subtract" onOperationButtonClick={handleOperationClick}/>
                <OperationButton operation="add" onOperationButtonClick={handleOperationClick}/>
                <OperationButton operation="equals" onOperationButtonClick={handleOperationClick}/>
            </div>
        </div>

    
}
import React from 'react'
import { useEffect, useState } from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import Display from './Display'

export default function Calculator() {

    let numpad = []

    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 1; j <= 3; j++) {
            row.push(<NumberButton key={i * 3 + j} k={i * 3 + j} />)
        }
        numpad.push(<div key={"numpadrow" + i} className="num-row d-flex justify-content-end" >
            {row}
        </div>)
    }
    numpad.push(<div key={"numpadrow" + 4} className="num-row d-flex justify-content-end">
        <OperationButton operation="clear" />
        <NumberButton key={0} k={0} />
        <OperationButton operation="decimal" />
    </div>)

    return <div className="container d-flex align-items-end justify-content-center">
        
            <div className='numpad'>
            <Display text='001'/>
                {numpad}
            </div>
            <div className="operation-pad d-flex flex-column">
                <OperationButton operation="divide" />
                <OperationButton operation="multiply" />
                <OperationButton operation="subtract" />
                <OperationButton operation="add" />
                <OperationButton operation="equals" />
            </div>
        </div>

    
}
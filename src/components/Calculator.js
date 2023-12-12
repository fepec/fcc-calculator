import React from 'react'
import { useEffect, useState } from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import ViewScreen from './ViewScreen'

export default function Calculator() {

    let numpad = []

    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 1; j <= 3; j++) {
            row.push(<NumberButton k={i * 3 + j} />)
        }
        numpad.push(<div key={"numrow" + i} className="num-row" >
            {row}
        </div>)
    }
    numpad.push(<div key={"numrow4"} className="num-row d-flex justify-content-center">
        <NumberButton k={0} />
    </div>)

    return <div className="container">
        <h2>this is a calculator</h2>
        <ViewScreen />
        <div className="d-flex">
            <div className=''>{numpad}
            </div>
            <div><OperationButton /></div>
        </div>

    </div>
}
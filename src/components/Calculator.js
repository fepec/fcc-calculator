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

    return <div>
        <h2>this is a calculator</h2>
        <ViewScreen />
        <div className="d-flex">
            <div>{numpad}
                <NumberButton k="0" />
            </div>
            <div><OperationButton /></div>
        </div>

    </div>
}
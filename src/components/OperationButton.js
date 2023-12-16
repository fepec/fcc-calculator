import React from 'react'

const operations = {
    "equals": {
        "symbol": "="
    },
    "add": {
        "symbol": "+"
    },
    "subtract":
    {
        "symbol": "-"
    },
    "multiply":
    {
        "symbol": "*"
    },
    "divide": {
        "symbol": "/"
    },
    "decimal": {
        "symbol":  "." 
    },
    "clear": {
        "symbol": "C"
    }
}

export default function OperationButton({operation, onOperationButtonClick}) {
    // return <button id={operation} className='btn btn-secondary m-1' onClick={onOperationButtonClick}>{String.fromCharCode(operations[operation].symbol)}</button>
    return <button id={operation} className='btn btn-secondary m-1' onClick={onOperationButtonClick}>{operations[operation].symbol}</button>
}
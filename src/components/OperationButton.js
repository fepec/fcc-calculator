import React from 'react'

const operations = {
    "equals": {
        "symbol": 61
    },
    "add": {
        "symbol": 43
    },
    "subtract":
    {
        "symbol": 8722
    },
    "multiply":
    {
        "symbol": 215
    },
    "divide": {
        "symbol": 247
    },
    "decimal": {
        "symbol":  46 
    },
    "clear": {
        "symbol": 67
    }
}

export default function OperationButton({operation, onOperationButtonClick}) {
    return <button id={operation} className='btn btn-secondary m-1' onClick={onOperationButtonClick}>{String.fromCharCode(operations[operation].symbol)}</button>
}
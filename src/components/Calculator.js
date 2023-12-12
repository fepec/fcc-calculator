import React from 'react'
import {useEffect, useState} from 'react'
import NumberButton from './NumberButton'
import OperationButton from './OperationButton'
import ViewScreen from './ViewScreen'

export default function Calculator() {
    return <div>
        <h2>this is a calculator</h2>
        <ViewScreen />
        <NumberButton />
        <OperationButton />
    </div>
}
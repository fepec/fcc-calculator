import React from 'react'

const numberNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

export default function NumberButton({k, onNumberButtonClick}) {
    return <button key={"num" + k} id={numberNames[k]} className='btn btn-primary m-1' onClick={onNumberButtonClick}>{k}</button>
}
import React from 'react'

export default function Display(props) {
    return <div id='display' className="d-flex justify-content-end px-1 align-items-center"><span className="">{props.text}</span></div>
}
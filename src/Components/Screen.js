import React from 'react'
import "./Screen.css"

export default function Screen({text, result}) {
    return (
        <div className="screen-viewer">
            <div className="result">
                <h1>{result}</h1>
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

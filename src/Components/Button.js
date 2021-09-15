import React from 'react'
import "./Button.css"

export default function Button({ symbol, color, handleClick }) {
    return (
        <div onClick = {() => handleClick(symbol)}
         className = "button" 
         style = {{backgroundColor : color}}>{symbol}         
        </div>
    )
}

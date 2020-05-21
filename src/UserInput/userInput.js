import React from 'react'
import './userInput.css'

const userInput = (props) => {
    return (
        <div>
            <p>Some lines of text before the entry box</p>
            <input type='text' onChange={props.changed} value={props.inputText}/>
        </div>
    )
}


export default userInput
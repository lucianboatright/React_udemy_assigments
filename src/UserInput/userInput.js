import React from 'react'
import './userInput.css'

// userinput component
const userInput = (props) => {
    return (
        <div>
            <p>Some lines of text before the entry box</p>
            <input type='text' onChange={props.changed} />
        </div>
    )
}

export default userInput
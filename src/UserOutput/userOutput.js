import React from 'react'
import './userOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I am the text: {props.inputText} </p>
            <p>I am length of the text: {props.inputText.length} </p>

        </div>
    )
}

export default userOutput
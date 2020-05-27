import React from 'react'
import './userOutputLength.css'

const userOutputLength = (props) => {
    return (
        <div className="UserOutputLength">
            <p>I am length of the text: {props.inputText.length} </p>

        </div>
    )
}


export default userOutputLength
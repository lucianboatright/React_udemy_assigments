import React from 'react'
// import './Userinput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I am the text {props.inputText} </p>

        </div>
    )
}


export default userOutput
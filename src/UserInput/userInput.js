import React from 'react'
import './Userinput.css'

const userInput = (props) => {
    return (
        <div>
            <p>Some liines of text before the entry box</p>
            <input type='text' onChange={props.change} value={'Enter text Here'} />
        </div>
    )
}


export default userInput
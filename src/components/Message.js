import React from 'react'

export default function Message(props) {
    console.log(props)
    const message = `, you're ${props.age}  years old`
    return (
        <div>
            Hi {props.user}
            {props.age &&
                message
            }
        </div>
    )
}
import React, { Component } from 'react'
import Message from './Message'

export default class Input extends Component {

    updateUser = (event) => {
        //we want to update the state with the event.target.value
        this.setState({
            user: event.target.value,
            age: 'too'
        })
    }

    render() {
        return (
            <div>
                <p>
                    {!this.state &&
                        "Type something please (to set a state)"
                    }</p>
                <input type="text" id="user"
                    onChange={this.updateUser}
                    placeholder={this.state && this.state.user} />
                {/* Conditional Rendering */}
                {this.state &&
                    <Message user={this.state.user} age={this.state.age} />
                }


            </div>
        )
    }
}
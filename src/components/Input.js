import React, { Component } from 'react'
import Message from './Message'

export default class Input extends Component {
    // constructor(props) {
    //     super(props);
    //     // hard binding -> of this.updateUser
    //     // this.updateUser = this.updateUser.bind(this)
    // }
    updateUser = (event) => {
        console.log(this)
        //we want to update the state with the event.target.value
        this.setState({
            user: event.target.value
        })
    }
    updateAge = (event) => {
        //we want to update the state with the event.target.value
        this.setState({
            age: event.target.value
        })
    }
    render() {
        return (
            <div>
                <p>
                    {!this.state &&
                        "Type something please (to set a state)"
                    }</p>
                <span>User:</span>
                <input type="text" id="user"
                    onChange={this.updateUser}
                />
                <span>Age:</span>
                <input type="number" id="age"
                    onChange={this.updateAge}
                />
                {/* Conditional Rendering */}
                {this.state &&
                    <Message user={this.state.user} age={this.state.age} />
                }
            </div>
        )
    }
}
import React, { Component } from 'react'

export class Form extends Component {

    constructor(){
        super()

        this.state = {
            username : '',
            topic: ''
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmitOperation = (event) => {
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault();
    }

    render() {
        const { username, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmitOperation}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Select</label>
                    <select value={topic} onChange={this.handleSelectChange}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    } 
}

export default Form
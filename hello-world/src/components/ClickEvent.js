import React, { Component } from 'react'

class ClickEvent extends Component {
    clickedMe(){
        console.log('click me')
    }
  
    render() {
    return (
      <div>
        <button onClick={this.clickedMe}>Click me!</button>
      </div>
    )
  }
}

export default ClickEvent
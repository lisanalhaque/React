import React, { Component } from 'react'

export default class Counter extends Component {
    // step-1 : Initialize state
    cunstructor(props) { //added props as parameter
        super(props);
        this.state = { //used to hold data or information about the component
            count: 0
        };
    }
    //  step-2 : Create methods to update state
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    //  step-3 : Render UI
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        
      </div>
    )
  }
}

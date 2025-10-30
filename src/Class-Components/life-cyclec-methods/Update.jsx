import React, { Component } from 'react'

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    icrement = () => {
        this.setState({count: this.state.count + 1});
    }

    componentDidUpdate(prevstate) { //prevstate is the props and state of the component
        if(prevstate.count !==this.state.count){
            console.log(`Component updated. New count is ${this.state.count}`);
        }
    }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.icrement}>Increment</button>
        
      </div>
    )
  }
}

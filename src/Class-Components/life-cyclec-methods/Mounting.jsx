// mounting used to show component on the screen
import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount() {  //life cycle method, which is automaticaly called when the component mount
        console.log("component mounted");
        
         
    }
  render() {
    return  <p>Component has been mounted !</p>
  }
}

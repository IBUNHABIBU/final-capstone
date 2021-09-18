import React, { Component } from 'react'

export default class Hover extends Component {
 render() {
  constructor(props) {
   super(props)
  
   this.state = {
     
   }
  }
  
  return (
   <div>
    <h2 onMouseOver={incrementCounter} onFocus={incrementCounter}>Hovered {count} times</h2>
   </div>
  )
 }
}

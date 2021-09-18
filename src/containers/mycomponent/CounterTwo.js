import React, { Component } from 'react'

export default class CounterTwo extends Component {
 constructor(props) {
  super(props)
 
  this.state = {
    count: 0,
  }
 }

 incrementCount = () => {
 
 }

 render() {
  const { count } = this.state;
  return (
   <div>
    <button type="submit">Increment {count} times</button>
   </div>
  )
 }
}

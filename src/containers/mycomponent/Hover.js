import React, { Component } from 'react';

export default class Hover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

 incrementCount = () => {
   this.setState((prevState) => ({ count: prevState.count + 1 }));
 }

 render() {
   const { count } = this.state;
   return (
     <div>
       <h2 onMouseOver={this.incrementCount} onFocus={this.incrementCount}>
         Increment
         {count}
         {' '}
         times
       </h2>
     </div>
   );
 }
}

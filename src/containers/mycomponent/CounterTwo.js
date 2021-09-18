import React, { Component } from 'react';

export default class CounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

 incrementCount = () => {
  this.setState(prevState => {
   return { count: prevState.count + 1 }
  })
 }

 render() {
   const { count } = this.state;
   return (
     <div>
       <button type="submit" onClick={this.incrementCount}>
         Increment
         {count}
         {' '}
         times
       </button>
     </div>
   );
 }
}

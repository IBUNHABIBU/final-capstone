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
       <h2 onMouseOver={incrementCount} onFocus={incrementCount}>
         Hovered
         {count}
         {' '}
         times
       </h2>
     </div>
   );
 }
}

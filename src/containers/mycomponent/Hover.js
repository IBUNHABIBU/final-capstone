import React, { Component } from 'react';

export default class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

 incrementCount = () => {
   this.setState((prevState) => ({ count: prevState.count + 1 }));
 }

 render() {
   return (
     <div>
       <h2 onMouseOver={incrementCounter} onFocus={incrementCounter}>
         Hovered
         {count}
         {' '}
         times
       </h2>
     </div>
   );
 }
}

import { Component } from 'react';
import './Hello.css';

// class Hello extends Component {
//   render() {
//     // return <h1>Hello, World!</h1>
//     /* return
//       <div>
//         <h1>Hello, World!</h1>
//         <p>Welcome to React (also known as React.js or ReactJS)!</p>
//       </div> */
//     return (
//       <div className='f1 tc'>
//         <h1>Hello, World!</h1>
//         {/* <p>Welcome to React (also known as React.js or ReactJS)!</p> */}
//         <p>{this.props.greeting}</p>
//       </div>
//     );
//   }
// }

const Hello = (props) => {
  return (
    <div className='f1 tc'>
      <h1>Hello, World!</h1>
      {/* <p>Welcome to React (also known as React.js or ReactJS)!</p> */}
      <p>{props.greeting}</p>
    </div>
  );
};

export default Hello;
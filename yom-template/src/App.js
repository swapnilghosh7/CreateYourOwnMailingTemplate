import React from 'react';
import './App.css';

import Header from './Header/Header';
import DragTemplate from './DragTemplate/DragTemplate';


class App extends React.Component {
   render() {
      const carinfo = {name: "Ford", model: "Mustang"};
      return (
         <div>
            <Header brand={carinfo}/>
            <DragTemplate />
           {/* <h1>{this.props.namePerson}</h1> */}
            
            {/* <Content/> */}
         </div>
      );
   }
}

// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text!!!</p>
//          </div>
//       );
//    }
// }
export default App;
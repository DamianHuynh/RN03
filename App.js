import React, {Component} from 'react';
import DemoComponentDefault from './src/Buoi1/DemoComponent';
import {DemoComponentNonDefault} from './src/Buoi1/DemoComponentNonDefault';
import DemoStyle from './src/Buoi1/DemoStyle';

//Stateful Component
class App extends Component {
  render() {
    return <DemoStyle />;
  }
}

export default App;

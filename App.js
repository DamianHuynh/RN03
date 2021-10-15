import React, {Component} from 'react';
import DemoComponentDefault from './src/Buoi1/DemoComponent';
import {DemoComponentNonDefault} from './src/Buoi1/DemoComponentNonDefault';
import DemoStyle from './src/Buoi1/DemoStyle';
import DemoStyleSheet from './src/Buoi2/DemoStyleSheet';
import DemoFlex from './src/Buoi2/DemoFlex';
import ExLayout from './src/Buoi2/ExLayout';
import DemoImage from './src/Buoi2/DemoImage';
import BindingData from './src/Buoi3/BindingData';
import ExUI from './src/Buoi3/ExUI';
import RenderList from './src/Buoi3/RenderList';

//Stateful Component
class App extends Component {
  render() {
    return <RenderList />;
  }
}

export default App;

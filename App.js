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
import ExRender from './src/Buoi4/ExRender';
import DemoScroll from './src/Buoi4/DemoScroll';
import DemoFlatList from './src/Buoi4/DemoFlatList';
import DemoSectionList from './src/Buoi4/DemoSectionList';
import RockPaperScissor from './src/Buoi5/RockPaperScissor';

//Stateful Component
class App extends Component {
  render() {
    return <RockPaperScissor />;
  }
}

export default App;

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
import DemoRedux from './src/Buoi6/DemoRedux';
import {Provider} from 'react-redux';
// import {store} from './src/Buoi6/redux/store';
import store from './src/Buoi7/redux/store';
import RockPaperScissorRedux from './src/Buoi7/RockPaperScissorRedux';

//Stateful Component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RockPaperScissorRedux />
      </Provider>
    );
  }
}

export default App;

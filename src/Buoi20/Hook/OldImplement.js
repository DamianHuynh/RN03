import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Hook(props) {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text>{props.title}</Text>
      <TouchableOpacity
        onPress={() => props.setTitle('React Native 03 after change')}>
        <Text>Change Title</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class WrapHook extends React.Component {
  state = {
    title: 'React Native 03',
  };

  setTitle = title => {
    this.setState({title});
  };

  render() {
    return <Hook title={this.state.title} setTitle={this.setTitle} />;
  }
}

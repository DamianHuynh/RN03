import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={{marginTop: 50, paddingLeft: 10, paddingRight: 10}}>
        <View
          style={{
            backgroundColor: '#C9C9FF',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text>Purple: #C9C9FF</Text>
        </View>
        <View>
          <Text>Blue: #3D85C6</Text>
        </View>
      </View>
    );
  }
}

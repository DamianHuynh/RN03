import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class DemoComponentNonDefault extends Component {
  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Demo Component Non Default
        </Text>
        <Text style={{fontSize: 18}}>Welcome to React Native 03</Text>
      </View>
    );
  }
}

/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={{marginTop: 50}}>
        <View style={boxStyle}>
          <Text style={textStyle}>Purple:#C9C9Ff</Text>
        </View>
        <View style={boxStyle}>
          <Text style={textStyle}>Blue:#3D85C6 </Text>
        </View>

        <View style={boxStyle}>
          <Text style={textStyle}>Green: #96CC96</Text>
        </View>
        <View style={boxStyle}>
          <Text style={textStyle}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}

const boxStyle = {
  borderRadius: 10,
  backgroundColor: '#C9C9Ff',
  justifyContent: 'center',
  alignItems: 'center',
  height: 150,
  marginTop: 10,
  marginLeft: 20,
  marginRight: 20,
};

const textStyle = {
  fontWeight: '900',
};

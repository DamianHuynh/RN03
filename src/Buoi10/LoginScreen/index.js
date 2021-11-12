import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text> LoginScreen InComponent </Text>
        <TouchableOpacity onPress={this.props.navigateToOnboardScreen}>
          <Text>goBack </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

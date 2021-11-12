import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

export default class AppText extends Component {
  render() {
    const {children, style} = this.props;
    console.log(this.props);
    return <Text style={[styles.defaultTextStyle, style]}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: '#fff',
  },
});

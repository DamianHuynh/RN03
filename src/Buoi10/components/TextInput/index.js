import React, {Component} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

export default class TextInput extends Component {
  render() {
    const {placeholder} = this.props;
    return (
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor="#rgba(255,255,255, 0.5)"
        style={styles.textInput}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#19191f',
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 20,
  },
});

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {ScreenStack} from '../..';

export default class DetailScreen extends Component {
  render() {
    console.log(JSON.stringify(this.props, null, 2));
    const {navigation, route} = this.props;
    return (
      <View style={styles.container}>
        <Text> DetailScreen </Text>

        <View
          style={[styles.box, {backgroundColor: route.params.backgroundColor}]}
        />

        <TouchableOpacity onPress={() => navigation.navigate(ScreenStack.Home)}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push(ScreenStack.Detail)}>
          <Text>Go to Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigation.popToTop}>
          <Text>Go to Init Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
  },
});

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default class DemoImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> DemoImage Component </Text>
        {/* <Image source={require('./corgi.jpeg')} /> */}
        <Image
          style={{width: 200, height: 100}}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6l0oQhMH_foNZu1W0G5Zi58irnyd3CNbSSQ&usqp=CAU',
          }}
        />
        <TextInput
          placeholder="Balance"
          keyboardType="number-pad"
          style={{
            borderWidth: 1,
            // borderColor: '#C9C9Ff',
            // borderStyle: 'dashed',
            width: '100%',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbb',
  },
});

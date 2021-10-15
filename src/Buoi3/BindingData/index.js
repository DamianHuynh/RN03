import React, {Component, Fragment} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

export default class BindingData extends Component {
  name = 'React Native 03';
  address = 'TP.HCM';

  state = {
    isLogin: false,
    name: 'Test Name',
  };

  renderName = () => {
    if (this.state.isLogin) {
      return (
        <>
          <Text>{this.name}</Text>
          <Text>{this.address}</Text>
        </>
      );
    }
  };

  onPressButton = buttonName => {
    console.log(buttonName + ' press');
    this.setState({isLogin: true}, () => {
      console.log(this.state.isLogin);
    });
  };

  onPressWithParam = () => {
    this.onPressButton('Opacity');
  };

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text> BindingData Component </Text>
        {/* {this.renderName()} */}
        {this.state.isLogin && (
          <>
            <Text>{this.name}</Text>
            <Text>{this.address}</Text>
          </>
        )}

        <TouchableOpacity style={styles.btn} onPress={this.onPressWithParam}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor="gray"
          style={[styles.btn, styles.btnHighlight]}
          onPress={() => this.onPressButton('Highlight')}>
          <Text>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#bfb',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnHighlight: {
    backgroundColor: '#bbf',
  },
});

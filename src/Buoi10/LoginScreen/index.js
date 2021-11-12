import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {ButtonIcon, Text, TextInput} from '../components';
import {fontIcon} from '../components/ButtonIcon';

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.headerContainer}>
          <ButtonIcon
            style={styles.goBackBtn}
            name={'left'}
            size={25}
            onPress={this.props.navigateToOnboardScreen}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text header>Login</Text>
            <Text>Glad to see you back!</Text>
          </View>
          <View>
            <TextInput placeholder={'Email'} />
            <TextInput placeholder={'Password'} />
          </View>
          <View style={styles.formFooter}>
            <Text>Forgot Password?</Text>
            <ButtonIcon name="arrowright" size={25} style={styles.loginBtn} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Text>or login with</Text>
          <View style={{flexDirection: 'row'}}>
            <ButtonIcon
              name="twitch"
              font={fontIcon.fontAwesome}
              size={30}
              style={styles.logoBtn}
            />
            <ButtonIcon
              name="twitch"
              font={fontIcon.fontAwesome}
              size={30}
              style={styles.logoBtn}
            />
            <ButtonIcon
              name="twitch"
              font={fontIcon.fontAwesome}
              size={30}
              style={styles.logoBtn}
            />
            <ButtonIcon
              name="twitch"
              font={fontIcon.fontAwesome}
              size={30}
              style={styles.logoBtn}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },
  headerContainer: {
    flex: 1,
    // backgroundColor: '#bfb',
  },
  goBackBtn: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
    padding: 8,
    borderRadius: 8,
  },
  formContainer: {
    flex: 11,
    justifyContent: 'center',
  },
  formHeader: {
    marginBottom: 50,
  },
  formFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBtn: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.5)',
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',

    // backgroundColor: '#bfb',
  },
  logoBtn: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, 0.2)',
    borderRadius: 8,
    marginHorizontal: 10,
  },
});

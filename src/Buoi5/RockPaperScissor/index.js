import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
} from 'react-native';
import {background, computer, paper, player, rock, scissor} from '../images';
import Button from './Button';
import PlayItem from './PlayItem';
import SelectItem from './SelectItem';

export default class RockPaperScissor extends Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={background}>
        <View style={styles.overlay} />
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="light-content" />
          <View style={styles.playContainer}>
            <PlayItem selectImage={scissor} playerImage={player} />
            <PlayItem selectImage={paper} playerImage={computer} />
          </View>
          <View style={styles.selectContainer}>
            <SelectItem selectImage={scissor} />
            <SelectItem selectImage={rock} />
            <SelectItem selectImage={paper} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Scores: 0</Text>
            <Text style={styles.infoText}>Times: 9</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Play" colors={['#f9f', '#ff0']} />
            <Button
              title="Back"
              backgroundColor="#ff0"
              isLinear={true}
              colors={['#f9f', '#ff0']}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  safeAreaView: {
    flex: 1,
  },
  playContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  selectContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0fc',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

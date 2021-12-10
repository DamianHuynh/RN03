import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const scWidth = Dimensions.get('screen').width;
const size = 80;

export default function DemoAnimationJS() {
  const [translateX, setTranslateX] = useState(0);

  const startAnimation = () => {
    for (let index = 0; index <= scWidth - size; index++) {
      setTimeout(() => {
        setTranslateX(index);
      }, index * 10);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, {transform: [{translateX}]}]} />
      <TouchableOpacity onPress={startAnimation}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    width: size,
    height: size,
    backgroundColor: 'orange',
    marginBottom: 20,

    // transform: [{translateX: scWidth - size}],
  },
});

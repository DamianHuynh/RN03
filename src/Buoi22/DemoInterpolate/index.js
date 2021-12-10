import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

const scWidth = Dimensions.get('screen').width;
const size = 80;

export default function DemoInterpolate() {
  const [state, setState] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const animatedBox = Animated.sequence([
    Animated.timing(translateX, {
      toValue: scWidth - size,
      useNativeDriver: false,
    }),
    // Animated.timing(translateY, {
    //   toValue: -200,
    //   useNativeDriver: false,
    // }),
    // Animated.parallel([
    //   Animated.timing(translateX, {
    //     toValue: 0,
    //     useNativeDriver: false,
    //   }),
    //   Animated.timing(translateY, {
    //     toValue: 0,
    //     useNativeDriver: false,
    //   }),
    // ]),
  ]);

  const rotate = translateX.interpolate({
    inputRange: [(scWidth - size) / 2, scWidth - 2 * size],
    outputRange: ['0deg', '360deg'],
    extrapolateLeft: 'clamp',
  });
  const backgroundColor = translateX.interpolate({
    inputRange: [(scWidth - size) / 2, scWidth - size],
    outputRange: ['orange', 'green'],
    extrapolate: 'clamp',
  });

  // inputRange:    0    | (scWidth - size) / 2 |
  // outputRange: '0deg' | '360deg'

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: state ? 0 : scWidth - size,
      useNativeDriver: false,
      duration: 5000,
    }).start();
  }, [translateX, state]);

  const startAnimation = () => {
    setState(!state);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {transform: [{translateX}, {translateY}, {rotate}], backgroundColor},
        ]}
      />
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

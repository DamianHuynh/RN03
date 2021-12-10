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

export default function DemoAnimated() {
  const [state, setState] = useState(false);
  const translateXS = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   setInterval(() => {
  //     for (let index = 0; index < 1000; index++) {
  //       console.log('setInterval');
  //     }
  //   }, 500);
  // }, []);

  const animatedBox = Animated.sequence([
    // Animated.spring(translateXS, {
    //   toValue: state ? 0 : scWidth - size,
    //   useNativeDriver: false,
    //   velocity: 0,
    // }),

    Animated.timing(translateX, {
      toValue: scWidth - size,
      useNativeDriver: false,
    }),
    Animated.timing(translateY, {
      toValue: -200,
      useNativeDriver: false,
    }),
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        useNativeDriver: false,
      }),
    ]),
  ]);

  // useEffect(() => {
  //   Animated.sequence([
  //     // Animated.spring(translateXS, {
  //     //   toValue: state ? 0 : scWidth - size,
  //     //   useNativeDriver: false,
  //     //   velocity: 0,
  //     // }),

  //     Animated.timing(translateX, {
  //       toValue: scWidth - size,
  //       useNativeDriver: false,
  //     }),
  //     Animated.timing(translateY, {
  //       toValue: -200,
  //       useNativeDriver: false,
  //     }),
  //     Animated.parallel([
  //       Animated.timing(translateX, {
  //         toValue: 0,
  //         useNativeDriver: false,
  //       }),
  //       Animated.timing(translateY, {
  //         toValue: 0,
  //         useNativeDriver: false,
  //       }),
  //     ]),
  //   ]).start();
  // }, [state, translateX, translateXS, translateY]);

  const startAnimation = () => {
    setState(!state);
    animatedBox.start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{translateX: translateXS}]}]}
      />
      <Animated.View
        style={[styles.box, {transform: [{translateX}, {translateY}]}]}
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

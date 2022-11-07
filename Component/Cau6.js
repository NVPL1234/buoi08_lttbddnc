import React from 'react';
import { Animated, Easing, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const AnimBell = () => {
  let rotateValue = new Animated.Value(0);

  const startImageRotate = () => {
    rotateValue.setValue(-1);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotate());
  };

  const rotateData = rotateValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-30deg', '30deg', '-30deg'],
  });

  startImageRotate()

  return (
    <Animated.View style={{ width: '40%', transform: [{ rotate: rotateData }] }}>
      <FontAwesome name="bell-o" size={90} color="black" />
    </Animated.View>
  )
}

export default function Cau6() {
  return (
    <View style={{ marginTop: '10%', marginLeft: '40%' }}>
      <AnimBell />
    </View>
  )
}  
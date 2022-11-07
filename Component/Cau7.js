import React from 'react';
import { Animated, Easing, View } from 'react-native';

const AnimImg = () => {
  let rotateValue = new Animated.Value(0);

  const startImageRotate = () => {
    rotateValue.setValue(0)
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 9000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startImageRotate());
  };

  const rotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  startImageRotate()

  return (
    <Animated.Image source={require('../assets/hinh_ngu_hanh.jpg')} style={{ transform: [{ rotate: rotateData }] }} />
  )
}

export default function Cau7() {
  return (
    <View style={{ marginTop: '10%' }}>
      <AnimImg />
    </View>
  )
}  
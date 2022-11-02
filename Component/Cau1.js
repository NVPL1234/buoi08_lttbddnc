import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import Index from '../Index';

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function Cau1 ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FadeInView style={{ width: '100%', height: 50, backgroundColor: 'powderblue' }}>
        <Text style={{ fontSize: 18, textAlign: 'center', margin: 10 }}>Welcome to Animation React Native</Text>
      </FadeInView>
      <View style={{marginTop: '10%'}}>
        <Index navigation={navigation}></Index>
      </View>
    </View>
  )
}

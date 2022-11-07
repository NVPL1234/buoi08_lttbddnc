import React, { useRef } from 'react';
import { Animated, View } from 'react-native';

const AnimImgTxt = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    Animated.timing(
        fadeAnim,
        {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false
        }
    ).start()

    const animTxt = useRef(new Animated.Value(0)).current

    Animated.timing(
        animTxt,
        {
            toValue: 500,
            duration: 3000,
            useNativeDriver: false
        }
    ).start()

    return (
        <Animated.View>
            <Animated.Image
                style={{
                    opacity: fadeAnim,
                }}
                source={require('../assets/icon_may_bay_2.png')}
            >
            </Animated.Image>
            <Animated.Text style={{marginLeft: animTxt, height: 20}}>
                HELLO WORLD!
            </Animated.Text>
        </Animated.View>
    );
}

export default function Cau4() {
    return (
        <View>
            <AnimImgTxt></AnimImgTxt>
        </View>
    )
}
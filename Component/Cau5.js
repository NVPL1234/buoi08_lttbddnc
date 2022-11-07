import React, { useRef } from 'react';
import { Animated, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const AnimImg = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    Animated.timing(
        fadeAnim, 
        {
            toValue: 1,
            duration: 3000, 
            useNativeDriver: false
        }
    ).start()


    const animImgX1 = useRef(new Animated.Value(0)).current
    const animImgY1 = useRef(new Animated.Value(0)).current

    Animated.timing(
        animImgX1,
        {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false
        }
    ).start();
    Animated.timing(
        animImgY1,
        {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false
        }
    ).start();

    const animImgX2 = useRef(new Animated.Value(0)).current
    const animImgY2 = useRef(new Animated.Value(0)).current

    Animated.timing(
        animImgX2,
        {
            toValue: 200,
            duration: 3000,
            useNativeDriver: false
        }
    ).start();
    Animated.timing(
        animImgY2,
        {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false
        }
    ).start();

    const animImgX3 = useRef(new Animated.Value(0)).current
    const animImgY3 = useRef(new Animated.Value(0)).current

    Animated.timing(
        animImgX3,
        {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false
        }
    ).start();
    Animated.timing(
        animImgY3,
        {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false
        }
    ).start();

    return (
        <View>
            <Animated.View
                style={{
                    marginLeft: animImgX1,
                    marginTop: animImgY1
                }}
            >
                <Fontisto name="rectangle" size={90} color="blue" />
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnim,
                    marginLeft: animImgX2,
                    marginTop: animImgY2
                }}
            >
                <Fontisto name="rectangle" size={90} color="blue" />
            </Animated.View>
            <Animated.View
                style={{
                    opacity: fadeAnim,
                    marginLeft: animImgX3,
                    marginTop: animImgY3
                }}
            >
                <Fontisto name="rectangle" size={90} color="blue" />
            </Animated.View>
        </View>
    );
}

export default function Cau5() {
    return (
        <View>
            <AnimImg />
        </View>
    )
}
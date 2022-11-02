import React, { useRef } from 'react';
import { Animated, Button, View } from 'react-native';

const FadeInView = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const anim = Animated.timing(
        fadeAnim,
        {
            toValue: 1000,
            duration: 3000,
            useNativeDriver: false
        }
    )

    const handleStart = () => {
        anim.start()
    }

    const handleStop = () => {
        anim.stop()
    }

    const handleReset = () => {
        anim.reset()
    }

    return (
        <Animated.View>
            <Animated.Image
                style={{
                    marginLeft: fadeAnim,
                }}
                source={require('../assets/icon_may_bay_2.png')}
            >
            </Animated.Image>
            <Button title='Start' onPress={handleStart}></Button>
            <Button title='Stop' onPress={handleStop}></Button>
            <Button title='Reset' onPress={handleReset}></Button>
        </Animated.View>
    );
}

export default function Cau3 () {
    return (
        <View style={{ marginTop: '5%' }}>
            <FadeInView>
            </FadeInView>
        </View>
    )
}
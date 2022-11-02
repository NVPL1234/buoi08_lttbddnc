import React, { useRef } from 'react';
import { Animated, Button, View } from 'react-native';

const FadeInView = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    const handleClick = () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1000,
                duration: 2000,
                useNativeDriver: false
            }
        ).start();
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
            <Button title='Di chuyển' onPress={handleClick}></Button>
        </Animated.View>
    );
}

export default function Cau2 () {
    return (
        <View style={{marginTop: '5%'}}>
            <FadeInView>
            </FadeInView>
        </View>
    )
}
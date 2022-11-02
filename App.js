import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cau1 from './Component/Cau1';
import Cau2 from './Component/Cau2';
import Cau3 from './Component/Cau3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Câu 1"
          component={Cau1}
        />
        <Stack.Screen name="Câu 2" component={Cau2} />
        <Stack.Screen name="Câu 3" component={Cau3} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
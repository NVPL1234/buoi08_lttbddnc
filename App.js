import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cau1 from './Component/Cau1';
import Cau2 from './Component/Cau2';
import Cau3 from './Component/Cau3';
import Cau4 from './Component/Cau4';
import Cau5 from './Component/Cau5';
import Cau6 from './Component/Cau6';
import Cau7 from './Component/Cau7';

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
        <Stack.Screen name="Câu 4" component={Cau4} />
        <Stack.Screen name="Câu 5" component={Cau5} />
        <Stack.Screen name="Câu 6" component={Cau6} />
        <Stack.Screen name="Câu 7" component={Cau7} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
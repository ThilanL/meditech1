/*
Auther : Thilan Lakshitha
Date : 06 th June 2022
Edited : 09 th June 2022
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import new1 from './screens/new1';
import new2 from './screens/new2';
import new3 from './screens/new3';
import new4 from './screens/new4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="new1" component={new1} />
        <Stack.Screen name="new2" component={new2} />
        <Stack.Screen name="new3" component={new3} />
        <Stack.Screen name="new4" component={new4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
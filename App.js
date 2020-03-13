import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Import Tab Navigator
import TabNavigator from './SRC/Navigation/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <TabNavigator/>
    </NavigationContainer>
  )
}

export default App;
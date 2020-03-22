import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../Screens/Splash';
import App from '../Navigation/BottomTabNavigator';

const Stack = createStackNavigator();

export function MainStack() {
    return (
        <View style={stackContainerStyle}>
            <Stack.Navigator initialRouteName={Splash} headerMode='none'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </View>
    )
}

const stackContainerStyle = {
    width:'100%',
    height:'100%'
}
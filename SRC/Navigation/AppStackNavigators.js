import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Screens
import Home from '../Screens/HomeScreen/Home';
import PackagesList from '../Screens/PackagesListScreen/PackagesList';

const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <View style={stackContainerStyle}>
            <Stack.Navigator initialRouteName={Home} headerMode='none'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PackagesList" component={PackagesList} />
            </Stack.Navigator>
        </View>
    )
}

const stackContainerStyle = {
    width:'100%',
    height:'100%'
}
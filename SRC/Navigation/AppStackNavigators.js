import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Screens
import {Home, PackagesList, SearchScreen, FullFilterScreen, WorkerProfile} from '../Screens';

const Stack = createStackNavigator();

export function HomeStack() {
    return (
        <View style={stackContainerStyle}>
            <Stack.Navigator initialRouteName={Home} headerMode='none'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="PackagesList" component={PackagesList} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
                <Stack.Screen name="FullFilter" component={FullFilterScreen} />
                <Stack.Screen name="WorkerProfile" component={WorkerProfile} />
            </Stack.Navigator>
        </View>
    )
}

const stackContainerStyle = {
    width:'100%',
    height:'100%'
}
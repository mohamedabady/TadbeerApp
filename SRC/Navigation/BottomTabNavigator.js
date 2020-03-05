import * as React from 'react';

//Import Tab Screens
import { Home, Candidates, Centers, Profile, Requests } from '../Screens/index';

//Import Packages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Candidates" component={Candidates} />
            <Tab.Screen name="Centers" component={Centers} />
            <Tab.Screen name="Requests" component={Requests} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}


import * as React from 'react';
import { Image } from 'react-native';

//Import Tab Screens
import { Home, Candidates, Centers, Profile, Requests } from '../Screens/index';

//Import Packages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import Constants
import {Colors} from '../Constants/Colors'

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
    let screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconPath;

            switch (route.name) {
                case 'Home':
                    iconPath = focused ? require('../Assets/Images/HomeFocused.png') : require('../Assets/Images/Home.png');
                    break;
                case 'Candidates':
                    iconPath = focused ? require('../Assets/Images/CandidatesFocused.png') : require('../Assets/Images/Candidates.png')
                    break;
                case 'Centers':
                    iconPath = require('../Assets/Images/Centers.png')
                    break;
                case 'Requests':
                    iconPath = require('../Assets/Images/Requests.png')
                    break;
                case 'Profile':
                    iconPath = focused ? require('../Assets/Images/ProfileFocused.png') : require('../Assets/Images/Profile.png')
                    break;
            }

            // You can return any component that you like here!
            return <Image source={iconPath? require('../Assets/Images/ProfileFocused.png') : require('../Assets/Images/Requests.png')} style={{ width: null, height: 20 }} />;
        },
    })
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
                activeTintColor: Colors.mainColor,
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Candidates" component={Candidates} />
            <Tab.Screen name="Centers" component={Centers} />
            <Tab.Screen name="Requests" component={Requests} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}


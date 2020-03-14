import React, { Component } from 'react'
import { Image, View, Text } from 'react-native';

//Import Tab Screens
import { Candidates, Centers, Profile, Requests } from '../Screens/index';

import {HomeStack} from './AppStackNavigators'

//Import Packages
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import LinearGradient from 'react-native-linear-gradient';

//Import Constants
import { Colors } from '../Constants/Colors'

export default class BottomNavigator extends Component {
    tabs = [
        {
            key: 'Home',
            iconSelected: require('../Assets/Images/HomeFocused.png'),
            iconNotSelected: require('../Assets/Images/Home.png'),
            label: 'Home',
            barColor: 'transparent',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Candidates',
            iconSelected: require('../Assets/Images/CandidatesFocused.png'),
            iconNotSelected: require('../Assets/Images/Candidates.png'),
            label: 'Candidates',
            barColor: 'transparent',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Centers',
            iconSelected: require('../Assets/Images/CentersFocused.png'),
            iconNotSelected: require('../Assets/Images/Centers.png'),
            label: 'Centers',
            barColor: 'transparent',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Requests',
            iconSelected: require('../Assets/Images/RequestsFocused.png'),
            iconNotSelected: require('../Assets/Images/Requests.png'),
            label: 'Requests',
            barColor: 'transparent',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'Profile',
            iconSelected: require('../Assets/Images/ProfileFocused.png'),
            iconNotSelected: require('../Assets/Images/Profile.png'),
            label: 'Profile',
            barColor: 'transparent',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ];

    state = {
        activeTab: 'Home'
    }

    renderIcon = iconSource => ({ isActive }) => (
        <Image resizeMode='contain' source={iconSource} style={{ width: 20, height: 20, tintColor: Colors.mainColor }} />
    )

    renderTab = ({ tab, isActive }) => (
        <LinearGradient colors={isActive? [Colors.tabGrdientTop, Colors.tabGradientBottom]: ['white','white']}>
            <FullTab
                isActive={isActive}
                key={tab.key}
                label={tab.label}
                labelStyle={{ fontFamily: isActive ? 'Apercu Bold' : 'Apercu Regular', color: Colors.mainColor, fontSize: 12 }}
                renderIcon={this.renderIcon(isActive ? tab.iconSelected : tab.iconNotSelected)}
                animationDuration={50}
            />
        </LinearGradient>
    )

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.activeTab === 'Home' && <HomeStack/>}
                    {this.state.activeTab === 'Candidates' && <Candidates/>}
                    {this.state.activeTab === 'Centers' && <Centers/>}
                    {this.state.activeTab === 'Requests' && <Requests/>}
                    {this.state.activeTab === 'Profile' && <Profile/>}
                </View>
                <BottomNavigation
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    tabs={this.tabs}
                />
            </View>
        )
    }
}
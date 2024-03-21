import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'
import SwipeUpDown from 'react-native-swipe-up-down';
import { RFValue } from 'react-native-responsive-fontsize';
import { Fonts } from '../../Constants/Fonts';

export default class SearchModal extends Component {

    _renderMiniItem = () => {
        return (
            <View style={{ borderTopLeftRadius: RFValue(20), borderTopRightRadius: RFValue(20), backgroundColor: '#F7F7F7', justifyContent: 'center', alignItems: 'center', height: RFValue(70), width: Dimensions.get('window').width * 0.8, alignSelf: 'center' }}>
                <Text style={{ fontSize: RFValue(18), fontFamily: Fonts.apercuMedium, color: '#707070', alignSelf: 'center' }}>Tap to Search</Text>
            </View>
        )
    }
    _renderFullItem = () => {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text>Full View</Text>
            </View>
        )
    }
    render() {
        return (
            <SwipeUpDown
                hasRef={ref => (this.swipeUpDownRef = ref)}
                swipeHeight={100}
                itemMini={this._renderMiniItem()}
                itemFull={this._renderFullItem()}
                disablePressToShow={false} 
                style={{ position: 'absolute', backgroundColor: 'transparent' }} // style for swipe
            />
        )
    }
}
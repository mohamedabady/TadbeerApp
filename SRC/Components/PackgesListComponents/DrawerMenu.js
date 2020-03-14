import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import MenuDrawer from 'react-native-side-drawer'

export default class DrawerScreen extends Component {
    renderTopPart = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image resizeMode='contain' source={require('../../Assets/Images/TadbeerLogo.png')} style={{ width: RFValue(48), height: RFValue(48) }} />
                <TouchableOpacity style={{ width: RFValue(30), height: RFValue(30), borderRadius:RFValue(15), justifyContent:"center", alignItems:'center', backgroundColor: Colors.drawerColor }} onPress={this.props.closeDrawer}>
                    <Image resizeMode='contain' source={require('../../Assets/Images/CloseIcon.png')} style={{ width: RFValue(10), height: RFValue(10) }} />
                </TouchableOpacity>
            </View>
        )
    }

    renderWebsiteLink = () => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' }}>
                <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: RFValue(24), color: Colors.drawerColor }}>Visit our Website</Text>
                <Image resizeMode='contain' source={require('../../Assets/Images/ArrowWebsite.png')} style={{ width: RFValue(17) }} />
            </TouchableOpacity>
        )
    }

    renderLanguageSwitch = () => {
        let isEnglish = this.props.isEnglish;
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity><Text style={{ color: isEnglish ? Colors.drawerColor : Colors.drawerOpacity, fontSize: RFValue(18), fontFamily: Fonts.apercuMedium }}>EN</Text></TouchableOpacity>
                <View style={{ height: RFValue(23), width: RFValue(1), backgroundColor: Colors.drawerColor, marginHorizontal: RFValue(12) }} />
                <TouchableOpacity><Text style={{ color: !isEnglish ? Colors.drawerColor : Colors.drawerOpacity, fontSize: RFValue(18), fontFamily: Fonts.apercuMedium }}>AR</Text></TouchableOpacity>
            </View>
        )
    }
    renderContentView = () => {
        return (
            <View style={{ backgroundColor: 'white', height:Dimensions.get('window').height, flex: 1, padding: RFValue(16), zIndex: 1010 }}>
                {this.renderTopPart()}

                <Text style={{ marginTop:'30%', marginBottom: '10%',fontSize: RFValue(24), fontFamily: Fonts.apercuMedium, color: Colors.drawerColor }}>About Tadbeer</Text>

                <Text style={{ marginVertical:'3%', color: '#707070', fontSize: RFValue(14), fontFamily: Fonts.apercuMedium }}>Tadbeer Home Care is a collaboration of experienced professionals in the industry, operated under Ministry of Human Resources and Emratization.</Text>
                <Text style={{ marginVertical:'3%', color: '#707070', fontSize: RFValue(14), fontFamily: Fonts.apercuMedium }}>We provide one stop solution for recruiting, supplying and training domestic workers in many different kinds of areas of work.</Text>
                <Text style={{ marginVertical:'3%', color: '#707070', fontSize: RFValue(14), fontFamily: Fonts.apercuMedium }}>We also provide typing services for Domestic Workers visas, medical typing, Emirates ID typing and Health Insurance.</Text>

                {this.renderWebsiteLink()}

                {this.renderLanguageSwitch()}

                <Image resizeMode='contain' source={require('../../Assets/Images/HREmbassyLogo.png')} style={{ width: RFValue(180) }} />
            </View>
        )
    }

    render() {

        return (
            <MenuDrawer
                style={{ zIndex: 1200 }}
                open={this.props.isDrawerOpen}
                drawerContent={this.renderContentView()}
                drawerPercentage={70}
                animationTime={250}
                overlay={true}
                opacity={0.8}/>
        )
    }
};


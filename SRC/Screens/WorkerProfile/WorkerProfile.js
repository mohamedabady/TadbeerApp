import React, { Component } from 'react'

import { Text, View, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'


//Packages Import 
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Fonts } from '../../Constants/Fonts';
import { Colors } from '../../Constants/Colors';
import { Categories, Countries, Packages } from '../../Screens/PackagesListScreen/StaticData'
import MultiSlider from '../../CustomPackages/@ptomasroos/react-native-multi-slider/MultiSlider';
import { Dropdown } from 'react-native-material-dropdown';

export default class WorkerProfile extends Component {
    Height = Dimensions.get('window').height;
    Width = Dimensions.get('window').width;
    topColor = this.props.route.params.topColor;
    areasOfExperience = [
        {
            id: 0,
            name: 'Cleaning',
            picture: require('../../Assets/Images/cleaning.jpg')
        },
        {
            id: 1,
            name: 'Ironing',
            picture: require('../../Assets/Images/ironing.jpg')
        },
        {
            id: 2,
            name: 'Cooking',
            picture: require('../../Assets/Images/cooking.jpg')
        },
        {
            id: 3,
            name: 'Gardening',
            picture: require('../../Assets/Images/gardening.jpg')
        },
    ]

    constructor(props) {
        super(props);
        this.state = {
            workerPic: require('../../Assets/Images/nurse3.jpg'),
            workerFlag: require('../../Assets/Images/Canada.png'),
            workerName: 'ANNISA BINT SABER',
            workerExperience: 10,
            nationality:'Canadian',
            religion:'Muslim',
            weight:'82',
            maritalStatus: 'Married',
            birthDate:'25/07/1986',
            age:'33',
            height:'182',
            children:2,
            summary:'Trustworthy, friendly and highly reliable maid with considerable experience in running a largehousehold, pays extreme attention to every detail and ensures high standards.',
            areasOfExperience: this.areasOfExperience

        }
    }
    _renderHeader = () => {
        return (
            <View style={{ width: this.Width, height: this.Height * 0.15, marginVertical: RFValue(12, this.Height), paddingHorizontal: RFValue(20, this.Height) }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image resizeMode='center' source={require('../../Assets/Images/backArrow.png')} style={{ width: RFValue(22, this.Height), height: RFValue(22, this.Height), marginBottom: this.Height * 0.03 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 36, fontFamily: Fonts.apercuBold, color: 'white' }}>Worker Profile</Text>
            </View>)
    }

    _renderVideoIcon = () => {
        return (
            <TouchableOpacity style={{ paddingHorizontal: RFValue(10), justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginVertical: RFValue(20) }}>
                <Image resizeMode='contain' style={{ width: RFValue(28), height: RFValue(20) }} source={require('../../Assets/Images/videoIcon.png')} />
            </TouchableOpacity>
        )
    }

    _renderImageSection = () => {
        return (
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'flex-end', marginTop: RFValue(-40) }}>
                <View style={{ width: RFValue(112), height: RFValue(112), borderRadius: RFValue(56) }}>
                    <Image resizeMode='cover' source={this.state.workerPic} style={{ width: RFValue(112), height: RFValue(112), borderRadius: RFValue(56) }} />
                </View>
                <View style={{ width: RFValue(30), height: RFValue(30), borderRadius: RFValue(15), marginStart: RFValue(-20) }}>
                    <Image resizeMode='cover' source={this.state.workerFlag} style={{ width: RFValue(30), height: RFValue(30), borderRadius: RFValue(15) }} />
                </View>
            </View>
        )
    }

    _renderWorkerNameSection = () => {
        return (
            <View style={{ width: '100%', alignItems: 'center', marginVertical:RFValue(32) }}>
                <Text style={{ textAlign: "center", fontFamily: Fonts.apercuBold, fontSize: RFValue(14), color: '#707070' }}>{this.state.workerName}</Text>
                <Text style={{ textAlign: 'center', fontFamily: Fonts.apercu, fontSize: RFValue(14), color: Colors.mainColor }}>{this.state.workerExperience} years of Experience</Text>
            </View>
        )
    }

    _renderSectionTitle = (imageSource, title, imageWidth, imageHeight) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: RFValue(16) }}>
                <Image resizeMode='contain' source={imageSource} style={{ width: imageWidth, height: imageHeight, marginEnd: RFValue(12) }} />
                <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>{title}</Text>
            </View>
        )
    }

    _renderPersonalInfoSection = () => {
        let textContainerStyle = { flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: RFValue(24) }
        let textStyle = { fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }
        return (
            <View style={{ marginBottom: RFValue(24) }}>
                {this._renderSectionTitle(require('../../Assets/Images/personalInfoIcon.png'), 'PERSONAL INFO', RFValue(15), RFValue(20))}
                <View style={textContainerStyle}>
                    <Text style={textStyle}>{this.state.nationality} . {this.state.religion}</Text>
                    <Text style={textStyle}>{this.state.weight} KG</Text>
                    <Text style={textStyle}>{this.state.maritalStatus}</Text>
                </View>
                <View style={textContainerStyle}>
                    <Text style={textStyle}>{this.state.birthDate} ({this.state.age} Years)</Text>
                    <Text style={textStyle}>{this.state.height} CM</Text>
                    <Text style={textStyle}>{this.state.children} Children</Text>
                </View>
            </View>
        )
    }

    _renderSummarySection = () => {
        let textStyle = { fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070', paddingHorizontal:RFValue(24) }
        return (
            <View style={{ marginBottom: RFValue(24) }} >
                {this._renderSectionTitle(require('../../Assets/Images/summary.png'), 'SUMMARY', RFValue(15), RFValue(18))}
                <Text style={textStyle}>{this.state.summary}</Text>
            </View>
        )
    }

    _renderVideoLink = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: RFValue(24) }}>
                <Image resizeMode='contain' style={{ width: RFValue(18), height: RFValue(18), marginEnd: RFValue(12) }} source={require('../../Assets/Images/videoLink.png')} />
                <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#463795', textDecorationLine: 'underline' }}>WATCH INTRODUCTION VIDEO</Text>
            </View>
        )
    }

    _renderAreasOfExperienceList = () => {
        return (
            <View>
                {this._renderSectionTitle(require('../../Assets/Images/experience.png'), 'AREAS OF EXPERTISE', RFValue(12), RFValue(19))}

                <FlatList
                    horizontal={true}
                    style={{ maxHeight: RFValue(150) }}
                    data={this.state.areasOfExperience}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ overflow: 'hidden', borderRadius: RFValue(10), marginTop: RFValue(12), marginHorizontal: RFValue(16), height: RFValue(65), width: RFValue(150), justifyContent: 'center', alignItems: 'center', paddingHorizontal: RFValue(12) }}>
                                <View style={{ borderRadius: RFValue(10), height: RFValue(65), width: RFValue(150), overflow: 'hidden' }}>
                                    <Image resizeMode='cover' source={item.picture} style={{ height: RFValue(65), width: RFValue(150), borderRadius: RFValue(10) }} />
                                </View>
                                <View style={{height: RFValue(65), width: RFValue(150), justifyContent:'center', alignItems:'center', zIndex:1000, marginTop:RFValue(-65), backgroundColor:'rgba(0,0,0,0.4)'}}>
                                    <Text style={{ fontSize: RFValue(14), fontFamily: Fonts.apercuBold, color: 'white' }}>{item.name}</Text>
                                </View>
                            </View>)
                    }} />

            </View>
        )
    }

    _renderContainer = () => {
        return (
            <View style={{ paddingVertical: RFValue(16), paddingHorizontal: RFValue(12), height: this.Height * 0.74, width: this.Width, backgroundColor: '#F7F7F7', borderTopLeftRadius: RFValue(20), borderTopRightRadius: RFValue(20) }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: RFValue(50) }}>
                    {this._renderVideoIcon()}
                    {this._renderImageSection()}
                    {this._renderWorkerNameSection()}
                    {this._renderPersonalInfoSection()}
                    {this._renderSummarySection()}
                    {this._renderVideoLink()}
                    {this._renderAreasOfExperienceList()}
                </ScrollView>
            </View>
        )
    }
    render() {
        return (
            <LinearGradient colors={[this.topColor, Colors.mainColor]} style={{
                flex: 1,
                width: Dimensions.get('window').width,
                alignItems: 'center',
                paddingTop: '5%'
            }}>
                {this._renderHeader()}
                {this._renderContainer()}
            </LinearGradient>
        )
    }
}
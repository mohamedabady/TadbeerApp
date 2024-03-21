import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'


//Packages Import 
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Fonts } from '../../Constants/Fonts';
import { Colors } from '../../Constants/Colors';
import { Categories, Countries, Packages } from '../../Screens/PackagesListScreen/StaticData'
import MultiSlider from '../../CustomPackages/@ptomasroos/react-native-multi-slider/MultiSlider';
import { Dropdown } from 'react-native-material-dropdown';

const GenderTypes = {
    male: 'MALE',
    female: 'FEMALE',
    all: 'All'
}

export default class FullFilter extends Component {
    Height = Dimensions.get('window').height;
    Width = Dimensions.get('window').width;
    topColor = this.props.route.params.topColor;

    constructor(props) {
        super(props);
        this.state = {
            serviceCenter: 'All',
            emirate: 'All',
            serviceType: 'All',
            religion: 'All',
            language: 'All',
            maritalStatus: 'All',
            selectedGender: GenderTypes.male,
            countries: Countries,
            packages: Packages,
            ageStart: 18,
            ageEnd: 50,
            experienceYears: 5,
            distance: 150
        };
    }

    _renderHeader = () => {
        return (
            <View style={{ width: this.Width, height: this.Height * 0.15, marginVertical: RFValue(12, this.Height), paddingHorizontal: RFValue(20, this.Height) }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image resizeMode='center' source={require('../../Assets/Images/backArrow.png')} style={{ width: RFValue(22, this.Height), height: RFValue(22, this.Height), marginBottom: this.Height * 0.03 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 36, fontFamily: Fonts.apercuBold, color: 'white' }}>Full Filter</Text>
            </View>)
    }

    _renderResetButton = () => {
        return (
            <TouchableOpacity style={{ borderRadius: RFValue(10), height: RFValue(20), paddingHorizontal: RFValue(10), borderWidth: RFValue(1), borderColor: '#707070', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginVertical: RFValue(20) }}>
                <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>RESET</Text>
            </TouchableOpacity>
        )
    }

    _renderDropDown = (title, data, value, onChangeValue) => {
        return (
            <View style={{ marginBottom: RFValue(12) }}>
                <Text style={{ marginBottom: RFValue(10), fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>{title}</Text>
                <View style={{ width: '100%', height: RFValue(40), borderRadius: RFValue(10), borderWidth: 1, borderColor: '#B9B9B9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: RFValue(12) }}>
                    <Dropdown
                        fontSize={RFValue(12)}
                        baseColor='transparent'
                        textColor='#707070'
                        itemColor='#707070'
                        selectedItemColor='#707070'
                        disabledItemColor='black'
                        dropdownOffset={{top:15, left:0}}
                        dropdownPosition={0}
                        itemCount={5}
                        //itemPadding={RFValue(8)}
                        containerStyle={{width:'95%'}}
                        itemTextStyle={{fontFamily: Fonts.apercuLight, fontSize: RFValue(12) }}
                        value={value}
                        pickerStyle={{ width: '95%', borderRadius: RFValue(10),  shadowColor: 'black', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.7, elevation: 3, paddingHorizontal: RFValue(12) }}
                        data={data}
                        onChangeText={(value) => onChangeValue(value)} />
                    <Image resizeMode='contain' style={{ height: RFValue(12), width: RFValue(12) }} source={require('../../Assets/Images/dropDownArrow.png')} />
                </View>
                {/* <TouchableOpacity style={{ width: '100%', height: RFValue(40), borderRadius: RFValue(10), borderWidth: 1, borderColor: '#B9B9B9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: RFValue(12) }}>
                    <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuLight, color: '#707070' }}>{dataPlaceholder}</Text>
                    <Image resizeMode='contain' style={{ height: RFValue(12), width: RFValue(12) }} source={require('../../Assets/Images/dropDownArrow.png')} />
                </TouchableOpacity> */}
            </View>
        )
    }

    _renderDatePicker = () => {
        return (
            <View style={{ marginBottom: RFValue(12) }}>
                <Text style={{ marginBottom: RFValue(10), fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>STARTING DATE</Text>
                <TouchableOpacity style={{ width: '100%', height: RFValue(40), borderRadius: RFValue(10), borderWidth: 1, borderColor: '#B9B9B9', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: RFValue(12) }}>
                    <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuLight, color: '#707070' }}>1 July 2019 - 25 October 2019</Text>
                    <Image resizeMode='contain' style={{ height: RFValue(16), width: RFValue(16) }} source={require('../../Assets/Images/calendar.png')} />
                </TouchableOpacity>
            </View>
        )
    }

    _renderGenderSelector = () => {
        let isMaleSelected = this.state.selectedGender === GenderTypes.male;
        let isFemaleSelected = this.state.selectedGender === GenderTypes.female;
        let isAllSelected = this.state.selectedGender === GenderTypes.all;

        let shadow = {
            shadowColor: '#707070',
            shadowOffset: {
                width: 0,
                height: 5
            },
            elevation: 5,
            shadowOpacity: 0.7,
            borderWidth: 0
        }

        return (
            <View style={{ marginBottom: RFValue(32) }}>
                <Text style={{ fontSize: RFValue(12), marginBottom: RFValue(10), fontFamily: Fonts.apercuBold, color: '#707070' }}>GENDER</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ selectedGender: GenderTypes.male })}
                        style={[{
                            flexDirection: 'row',
                            borderRadius: RFValue(10),
                            //marginTop: RFValue(18),
                            marginHorizontal: RFValue(16),
                            height: RFValue(50),
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: RFValue(12),
                            borderWidth: RFValue(1),
                            borderColor: '#707070',
                            backgroundColor: isMaleSelected ? 'white' : 'transparent'
                        },
                        isMaleSelected && shadow]}>
                        <Text style={{
                            fontSize: RFValue(24),
                            fontFamily: Fonts.apercuMedium,
                            color: isMaleSelected ? '#463795' : '#707070'
                        }}>{GenderTypes.male}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ selectedGender: GenderTypes.female })}
                        style={[{
                            flexDirection: 'row',
                            borderRadius: RFValue(10),
                            //marginTop: RFValue(18),
                            marginHorizontal: RFValue(16),
                            height: RFValue(50),
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: RFValue(12),
                            borderWidth: RFValue(1),
                            borderColor: '#707070',
                            backgroundColor: isFemaleSelected ? 'white' : 'transparent'
                        },
                        isFemaleSelected && shadow]}>
                        <Text style={{
                            fontSize: RFValue(24),
                            fontFamily: Fonts.apercuMedium,
                            color: isFemaleSelected ? '#463795' : '#707070'
                        }}>{GenderTypes.female}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.setState({ selectedGender: GenderTypes.all })}
                        style={[{
                            flexDirection: 'row',
                            borderRadius: RFValue(10),
                            //marginTop: RFValue(18),
                            marginHorizontal: RFValue(16),
                            height: RFValue(50),
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: RFValue(12),
                            borderWidth: RFValue(1),
                            borderColor: '#707070',
                            backgroundColor: isAllSelected ? 'white' : 'transparent'
                        },
                        isAllSelected && shadow]}>
                        <Text style={{
                            fontSize: RFValue(24),
                            fontFamily: Fonts.apercuMedium,
                            color: isAllSelected ? '#463795' : '#707070'
                        }}>{GenderTypes.all}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _renderNationalitySelector = () => {
        let shadow = {
            shadowColor: '#707070',
            shadowOffset: {
                width: 0,
                height: 5
            },
            elevation: 5,
            shadowOpacity: 0.7,
            borderWidth: 0
        }
        return (
            <View style={{ marginBottom: RFValue(16), height: RFValue(95) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>NATIONALITY</Text>
                    <TouchableOpacity style={{ borderRadius: RFValue(10), height: RFValue(20), paddingHorizontal: RFValue(10), borderWidth: RFValue(1), borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>SELECT ALL</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal={true}
                    style={{ maxHeight: RFValue(75) }}
                    data={this.state.countries}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={country => country.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    this.state.countries[item.id].isSelected = !this.state.countries[item.id].isSelected;
                                    this.setState({})
                                }}
                                style={[{ flexDirection: 'row', borderRadius: RFValue(10), marginTop: RFValue(18), marginHorizontal: RFValue(16), height: RFValue(50), justifyContent: 'center', alignItems: 'center', paddingHorizontal: RFValue(12), borderWidth: RFValue(1), borderColor: '#707070', backgroundColor: item.isSelected ? 'white' : 'transparent' }, item.isSelected && shadow]}>
                                <Image resizeMode='contain' source={item.image} style={{ marginEnd: RFValue(10), height: RFValue(15), width: RFValue(15) }} />
                                <Text style={{ fontSize: RFValue(24), fontFamily: Fonts.apercuMedium, color: item.isSelected ? '#463795' : '#707070' }}>{item.name}</Text>
                            </TouchableOpacity>)
                    }} />
            </View>
        )
    }

    _renderAgeSlider = () => {
        return (
            <View style={{ marginBottom: RFValue(12) }}>
                <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>AGE</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginEnd: 18, fontSize: 14, fontFamily: Fonts.apercuMedium, color: 'rgba(112,112,112, 0.5)' }}>18</Text>
                    <MultiSlider
                        isMarkersSeparated={true}
                        values={[this.state.ageStart, this.state.ageEnd]}
                        min={18}
                        max={50}
                        step={1}
                        Style={{
                            container: { backgroundColor: '#463795', height: 28 },
                            track: { backgroundColor: '#463795', height: 28 },
                            selected: { backgroundColor: '#463795' },
                            unselected: { backgroundColor: '#707070' },
                            markerContainer: { borderWidth: 3, borderColor: 'black' },
                            marker: { backgroundColor: 'blue' },
                            pressedMarker: { backgroundColor: '#463795' }
                        }}
                        onValuesChangeFinish={(values) => {
                            this.setState({ ageStart: values[0], ageEnd: values[1] })
                        }}
                        customMarkerLeft={(e) => <View style={{ backgroundColor: 'white', width: 28, height: 28, borderRadius: 14, borderWidth: 0.5, borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: 14, color: '#707070' }}>{e.currentValue}</Text>
                        </View>}
                        customMarkerRight={(e) => <View style={{ backgroundColor: 'white', width: 28, height: 28, borderRadius: 14, borderWidth: 0.5, borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: 14, color: '#707070' }}>{e.currentValue}</Text>
                        </View>}
                    />
                    <Text style={{ marginStart: 18, fontSize: 14, fontFamily: Fonts.apercuMedium, color: 'rgba(112,112,112, 0.5)' }}>50</Text>
                </View>
            </View>
        )
    }

    _renderPackages = () => {
        let shadow = {
            shadowColor: '#707070',
            shadowOffset: {
                width: 0,
                height: 5
            },
            elevation: 5,
            shadowOpacity: 0.7,
            borderWidth: 0
        }
        return (
            <View style={{ marginBottom: RFValue(16), height: RFValue(110) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: RFValue(16) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>PACKAGES</Text>
                        <Image style={{ width: RFValue(20), height: RFValue(20), marginStart: RFValue(8) }} source={require('../../Assets/Images/PackagesIcon.png')} />
                    </View>

                    <TouchableOpacity style={{ borderRadius: RFValue(10), height: RFValue(20), paddingHorizontal: RFValue(10), borderWidth: RFValue(1), borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>SELECT ALL</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    horizontal={true}
                    style={{ maxHeight: RFValue(75) }}
                    data={this.state.packages}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={p => p.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    this.state.packages[item.id].isSelected = !this.state.packages[item.id].isSelected;
                                    this.setState({})
                                }}
                                style={[{ flexDirection: 'row', borderRadius: RFValue(10), marginTop: RFValue(18), marginHorizontal: RFValue(16), height: RFValue(50), justifyContent: 'center', alignItems: 'center', paddingHorizontal: RFValue(12), borderWidth: RFValue(1), borderColor: '#707070', backgroundColor: item.isSelected ? 'white' : 'transparent' }, item.isSelected && shadow]}>
                                <Text style={{ fontSize: RFValue(24), fontFamily: Fonts.apercuMedium, color: item.isSelected ? '#463795' : '#707070' }}>{item.name}</Text>
                            </TouchableOpacity>)
                    }} />

            </View>
        )
    }

    _renderExperienceSlider = () => {
        return (
            <View style={{ marginBottom: RFValue(12) }}>
                <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>YEARS OF EXPERIENCE</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginEnd: 18, fontSize: 14, fontFamily: Fonts.apercuMedium, color: 'rgba(112,112,112, 0.5)' }}>0</Text>
                    <MultiSlider
                        isMarkersSeparated={false}
                        values={[this.state.experienceYears]}
                        min={0}
                        max={10}
                        step={1}
                        Style={{
                            container: { backgroundColor: '#463795', height: 28 },
                            track: { backgroundColor: '#463795', height: 28 },
                            selected: { backgroundColor: '#463795' },
                            unselected: { backgroundColor: '#707070' },
                            markerContainer: { borderWidth: 3, borderColor: 'black' },
                            marker: { backgroundColor: 'blue' },
                            pressedMarker: { backgroundColor: '#463795' }
                        }}
                        onValuesChangeFinish={(values) => {
                            this.setState({ experienceYears: values[0] })
                        }}
                        customMarker={(e) => <View style={{ backgroundColor: 'white', width: 28, height: 28, borderRadius: 14, borderWidth: 0.5, borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: 14, color: '#707070' }}>{e.currentValue}</Text>
                        </View>}
                    />
                </View>
            </View>
        )
    }

    _renderDistanceSlider = () => {
        return (
            <View>
                <Text style={{ fontSize: RFValue(12), fontFamily: Fonts.apercuBold, color: '#707070' }}>DISTANCE</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginEnd: 18, fontSize: 14, fontFamily: Fonts.apercuMedium, color: 'rgba(112,112,112, 0.5)' }}>0</Text>
                    <MultiSlider
                        isMarkersSeparated={false}
                        values={[this.state.distance]}
                        min={0}
                        max={250}
                        step={1}
                        Style={{
                            container: { backgroundColor: '#463795', height: 28 },
                            track: { backgroundColor: '#463795', height: 28 },
                            selected: { backgroundColor: '#463795' },
                            unselected: { backgroundColor: '#707070' },
                            markerContainer: { borderWidth: 3, borderColor: 'black' },
                            marker: { backgroundColor: 'blue' },
                            pressedMarker: { backgroundColor: '#463795' }
                        }}
                        onValuesChangeFinish={(values) => {
                            this.setState({ distance: values[0] })
                        }}
                        customMarker={(e) => <View style={{ backgroundColor: 'white', width: 28, height: 28, borderRadius: 14, borderWidth: 0.5, borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: 14, color: '#707070' }}>{e.currentValue}</Text>
                        </View>}
                    />
                    <Text style={{ marginStart: 20, fontSize: 14, fontFamily: Fonts.apercuMedium, color: 'rgba(112,112,112, 0.5)', width: RFValue(35) }}>250 Miles</Text>
                </View>
            </View>
        )
    }

    _renderSubmitButton = () => {
        return (
            <TouchableOpacity style={{ marginTop: RFValue(16), borderRadius: RFValue(25), height: RFValue(50), width: Dimensions.get('window').width * 0.9, backgroundColor: '#463795', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontFamily: Fonts.apercuMedium, color: 'white' }}>APPLY</Text>
            </TouchableOpacity>
        )
    }

    _renderContainer = () => {
        return (
            <View style={{ paddingVertical: RFValue(16), paddingHorizontal: RFValue(12), height: this.Height * 0.74, width: this.Width, backgroundColor: '#F7F7F7', borderTopLeftRadius: RFValue(20), borderTopRightRadius: RFValue(20) }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: RFValue(50) }}>
                    {this._renderResetButton()}
                    {this._renderDropDown('SERVICE TYPE', [{value: 'All'}, {value : 'Long term'}, {value: 'Short term'}, {value:'Flexible'}], this.state.serviceType, (value) => this.setState({ serviceType: value }))}
                    {this._renderDatePicker()}
                    {this._renderGenderSelector()}
                    {this._renderNationalitySelector()}
                    {this._renderAgeSlider()}
                    {this._renderDropDown('RELIGION', [{value:'All'}, {value: 'Muslim'}, {value : 'Christian'}, {value: 'Hindu'}, {value: 'Urdu'}], this.state.religion, (value) => this.setState({ religion: value }))}
                    {this._renderDropDown('SPOKEN LANGUAGES', [{value:'All'}, {value:'English'}, {value:'Arabic'}, {value:'Indian'}, {value:'French'}, {value:'Spanish'}], this.state.language, (value) => this.setState({ language: value }))}
                    {this._renderPackages()}
                    {this._renderExperienceSlider()}
                    {this._renderDropDown('MARITAL STATUS', [{value:'All'}, {value:'Married'}, {value:'Single'}, {value:'Divorced'}], this.state.maritalStatus, (value) => this.setState({ maritalStatus: value }))}
                    <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(112,112,112,0.1)', marginVertical: RFValue(16), marginBottom: RFValue(24) }} />
                    {this._renderDropDown('EMIRATES', [{value:'All'}, {value:'Abu Dhabi'}, {value:'Dubai'}, {value:'Sharjah'}, {value:'Al-Ein'}], this.state.emirate, (value) => this.setState({ emirate: value }))}
                    {this._renderDropDown('SERVICE CENTERS', [{value:'All'}, {value:'Center 1'}, {value:'Center 2'}, {value:'Center 3'}], this.state.serviceCenter, (value) => this.setState({ serviceCenter: value }))}
                    {this._renderDistanceSlider()}
                    {this._renderSubmitButton()}
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

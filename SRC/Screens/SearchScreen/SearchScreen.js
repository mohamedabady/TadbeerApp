import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native'

//Packages Import 
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Fonts } from '../../Constants/Fonts';
import { Colors } from '../../Constants/Colors';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class SearchScreen extends Component {
    Height = Dimensions.get('window').height;
    Width = Dimensions.get('window').width;
    topColor = this.props.route.params.topColor;
    workers = [
        {
            id: 0,
            name: 'ANNISA BINT SABER',
            experience: 10,
            age: 33,
            nationality: 'Indonesian',
            picture: require('../../Assets/Images/nurse1.jpg'),
            countryFlag: require('../../Assets/Images/indonesia.png'),
            religion: 'Muslim',
            languages: ['English', 'Arabic'],
            salary: 1500,
            processingFees: 15000
        },
        {
            id: 1,
            name: 'Mahmoud Ragab',
            experience: 5,
            age: 29,
            nationality: 'Mozambique',
            picture: require('../../Assets/Images/nurse2.jpg'),
            countryFlag: require('../../Assets/Images/Mozambique.png'),
            religion: 'Muslim',
            languages: ['English', 'Arabic', 'French'],
            salary: 1000,
            processingFees: 10000
        },
        {
            id: 2,
            name: 'Samira Essmat',
            experience: 17,
            age: 38,
            nationality: 'Afghanistan',
            picture: require('../../Assets/Images/nurse3.jpg'),
            countryFlag: require('../../Assets/Images/Afghanistan.png'),
            religion: 'Muslim',
            languages: ['English', 'Arabic', 'Urdu'],
            salary: 1700,
            processingFees: 19000
        },
        {
            id: 3,
            name: 'Hayam Samer',
            experience: 3,
            age: 25,
            nationality: 'French',
            picture: require('../../Assets/Images/nurse4.jpg'),
            countryFlag: require('../../Assets/Images/France.png'),
            religion: 'Muslim',
            languages: ['English', 'Arabic', 'French'],
            salary: 1500,
            processingFees: 15000
        },
        {
            id: 4,
            name: 'Gameela Salem',
            experience: 13,
            age: 36,
            nationality: 'Indian',
            picture: require('../../Assets/Images/nurse5.png'),
            countryFlag: require('../../Assets/Images/India.png'),
            religion: 'Muslim',
            languages: ['English', 'Arabic', 'Indian'],
            salary: 1500,
            processingFees: 15000
        },
        {
            id: 5,
            name: 'Soaad salama',
            experience: 15,
            age: 33,
            nationality: 'Canadian',
            picture: require('../../Assets/Images/nurse6.jpg'),
            countryFlag: require('../../Assets/Images/Canada.png'),
            religion: 'Muslim',
            languages: ['English', 'Arabic', 'French'],
            salary: 2000,
            processingFees: 25000
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            workers: this.workers,
            selectedIndex: 0
        }
        this._renderWorkersList = this._renderWorkersList.bind(this);
    }
    _renderHeader = () => {
        return (
            <View style={{ width: this.Width, height: this.Height * 0.15, marginVertical: RFValue(12, this.Height), paddingHorizontal: RFValue(20, this.Height) }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image resizeMode='center' source={require('../../Assets/Images/backArrow.png')} style={{ width: RFValue(22, this.Height), height: RFValue(22, this.Height), marginBottom: this.Height * 0.03 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 36, fontFamily: Fonts.apercuBold, color: 'white' }}>{this.props.route.params.selectedCategory.category}</Text>
            </View>)
    }
    _renderTopText = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: RFValue(16) }}>
                <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>{this.props.route.params.selectedCategory.number} Workers from 15 Service Centers</Text>
                <TouchableOpacity style={{ borderRadius: RFValue(10), height: RFValue(20), paddingHorizontal: RFValue(10), borderWidth: RFValue(1), borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>SHOW ALL</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderFilters = () => {
        let filters = [
            {
                id: 0,
                text: 'FULL FILTER'
            },
            {
                id: 1,
                text: 'India'
            },
            {
                id: 2,
                text: 'Morocco'
            },
            {
                id: 3,
                text: 'Traditional'
            },
            {
                id: 4,
                text: 'Flexible'
            },
        ]
        return (
            <FlatList
                data={filters}
                horizontal={true}
                style={{ maxHeight: this.Height * 0.1, marginTop: RFValue(12) }}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ flexDirection: 'row', marginEnd: RFValue(16), borderRadius: RFValue(14), height: RFValue(28), paddingHorizontal: RFValue(12), borderWidth: RFValue(1), borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
                            {item.id === 0 && <Image resizeMode='center' style={{ width: RFValue(11), height: RFValue(8), marginEnd: RFValue(8) }} source={require('../../Assets/Images/fullFilter.png')} />}
                            <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: RFValue(14), color: Colors.mainColor }}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                }} />
        )
    }
    _renderWorkersList = () => {
        return (
            <FlatList
                ref={ref => this.flatListRef = ref}
                data={this.state.workers}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                style={{ maxHeight: this.Height * 0.5, marginTop: -28, paddingHorizontal: RFValue(10), paddingVertical: RFValue(10) }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => this._renderWorkerItem(item)}
            />
        )
    }
    _renderWorkerItem = (worker) => {
        return (
            <View style={{ height: this.Height * 0.45, width: this.Width * 0.55, justifyContent: 'space-between', paddingVertical: RFValue(20), paddingHorizontal: RFValue(12), backgroundColor: 'white', borderRadius: RFValue(20), marginEnd: RFValue(8), shadowColor: '#707070', shadowOffset: { width: 0, height: 3 }, elevation: 3 }}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <View style={{ width: RFValue(76), height: RFValue(76), borderRadius: RFValue(38) }}>
                        <Image resizeMode='cover' source={worker.picture} style={{ width: RFValue(76), height: RFValue(76), borderRadius: RFValue(38) }} />
                    </View>
                    <View style={{ width: RFValue(30), height: RFValue(30), borderRadius: RFValue(15), marginStart: RFValue(-20) }}>
                        <Image resizeMode='cover' source={worker.countryFlag} style={{ width: RFValue(30), height: RFValue(30), borderRadius: RFValue(15) }} />
                    </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={{ textAlign: "center", fontFamily: Fonts.apercuBold, fontSize: RFValue(14), color: '#707070' }}>{worker.name}</Text>
                    <Text style={{ textAlign: 'center', fontFamily: Fonts.apercu, fontSize: RFValue(14), color: Colors.mainColor }}>{worker.experience} years of Experience</Text>
                </View>

                <Text numberOfLines={2} style={{ textAlign: 'center', fontFamily: Fonts.apercu, fontSize: RFValue(12), color: '#707070', width: '100%' }}>{worker.age} Years Old . {worker.nationality} . {worker.religion} . Speaks {worker.languages.join(' & ')}</Text>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={{ textAlign: "center", fontFamily: Fonts.apercuBold, fontSize: RFValue(18), color: Colors.mainColor }}>{worker.salary} MONTHLY</Text>
                    <Text style={{ textAlign: "center", fontFamily: Fonts.apercu, fontSize: RFValue(12), color: '#2F2F2F' }}>{worker.processingFees} PROCESSING FEES</Text>
                </View>

                <TouchableOpacity style={{ height: RFValue(40), width: '100%', borderRadius: RFValue(20), backgroundColor: Colors.mainColor, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(14), color: 'white' }}>VIEW PROFILE</Text>
                </TouchableOpacity>
            </View>
        )
    }
    _renderSlider = () => {
        return (
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:RFValue(-20)}}>
                <MultiSlider
                    isMarkersSeparated={false}
                    sliderLength={this.Width*0.8}
                    values={[this.state.selectedIndex]}
                    min={0}
                    max={this.state.workers.length}
                    step={1}
                    onValuesChangeFinish={(values) => {
                        this.flatListRef.scrollToIndex({ animated: true, index: values[0], viewOffset: 0.5, viewPosition: 0.5 })
                        this.setState({ selectedIndex: values[0] })
                    }}
                    customMarker={(e) =>
                        <View style={{ backgroundColor: 'white', width: 28, height: 28, borderRadius: 14, borderWidth: 0.5, borderColor: Colors.mainColor, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: Fonts.apercuMedium, fontSize: 14, color: Colors.mainColor }}>{e.currentValue}</Text>
                        </View>}
                />
                <Text style={{marginStart:RFValue(12), color: Colors.mainColor, fontFamily:Fonts.apercu, fontSize: RFValue(14)}}>{this.state.workers.length - (this.state.selectedIndex+1)}</Text>
            </View>
        )
    }
    _renderContainer = () => {
        return (
            <View style={{ paddingVertical: RFValue(16), paddingHorizontal: RFValue(12), height: this.Height * 0.74, width: this.Width, backgroundColor: '#F7F7F7', borderTopLeftRadius: RFValue(20), borderTopRightRadius: RFValue(20) }}>
                {this._renderTopText()}
                {this._renderFilters()}
                {this._renderWorkersList()}
                {this._renderSlider()}
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
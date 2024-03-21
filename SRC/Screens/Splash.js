import React, { Component } from 'react';
import { View, StatusBar, Image, Dimensions, Alert, ActivityIndicator } from 'react-native';
import Networking from '../Config/Networking';

import AsyncStorage from '@react-native-community/async-storage';

//import actions 
import { getCountries, getPackages, getWorkers } from '../Store/Actions';

//import redux connect function
import { connect } from "react-redux";

class Splash extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading: false
        }
    }
    componentDidMount() {
        //getting general data
        let countriesPromise = Networking.getCountries();
        let packagesPromise = Networking.getPackages();
        let workersPromise = Networking.getWorkers();

        this.setState({isLoading: true});

        Promise.all([countriesPromise, packagesPromise, workersPromise]).then(([res1, res2, res3]) => {
            // console.warn(res1.data)
            this.setState({isLoading: false});
            // this.props.getCountries(res1.data);
            // this.props.getPackages(res2.data);
            // this.props.getWorkers(res3.data);

            AsyncStorage.setItem('Packages', JSON.stringify(res1.data));
            AsyncStorage.setItem('Countries', JSON.stringify(res2.data));
            AsyncStorage.setItem('Workers', JSON.stringify(res3.data));

            this.props.navigation.navigate('App');
        }).catch(e => {
            // console.warn(JSON.stringify(e, null, 2))
            Alert.alert('Network Error', "couldn't get data from the network. Try again later")
        });
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar hidden={true} />
                <Image style={{ width: '150%', height: Dimensions.get('window').height }} resizeMode='cover' source={require('../Assets/Images/splash.png')} />
                {this.state.isLoading && <ActivityIndicator size='large' color='#463795' animating={this.state.isLoading} style={{position:'absolute', bottom:'25%', left:0, right:0, zIndex:1000}}/>}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        Packages: state.Packages,
        Countries: state.Countries,
        Workers: state.Workers
    }
}

export default connect(mapStateToProps, { getCountries, getPackages, getWorkers })(Splash)

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

//PackagesImport
import LinearGradient from 'react-native-linear-gradient';

//Constants Import
import { Colors } from '../../Constants/Colors'

//Styles Import 
import {HomeStyles} from './HomeStyles'


export default class Home extends Component {
  render() {
    return (
      <LinearGradient colors={[Colors.screenTopGradient, Colors.screenBottomGradient]} style={HomeStyles.mainContainer}>
        <Text style={HomeStyles.titleText}>Service Type</Text>

        <TouchableOpacity style={HomeStyles.mainButton}>
          <Text style={HomeStyles.buttonTitle}>On Demand Services</Text>
          <Text style={HomeStyles.buttonDesc}>Request workers for short term chores / jobs (maximum of 8 hours per day)</Text>
          <Image source={require('../../Assets/Images/arrowRight.png')} style={HomeStyles.imageStyle}/> 
        </TouchableOpacity>

        <TouchableOpacity style={HomeStyles.mainButton}>
          <Text style={HomeStyles.buttonTitle}>Long Term Services</Text>
          <Text style={HomeStyles.buttonDesc}>Request  a worker from near by service centers for minimum of three months </Text>
          <Image source={require('../../Assets/Images/arrowRight.png')} style={HomeStyles.imageStyle}/> 
        </TouchableOpacity>

      </LinearGradient>
    );
  }
}

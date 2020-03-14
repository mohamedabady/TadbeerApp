import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import {Colors} from '../../Constants/Colors';
import {Fonts} from '../../Constants/Fonts';


export const PackagesListStyles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      paddingTop: '5%'
    },
    searchContainer: {
      alignItems: 'center',
      paddingHorizontal: RFValue(12),
      flexDirection: 'row'
    },
    drawerButton: {
      marginEnd: RFValue(8),
      borderRadius: RFValue(20),
      width: RFValue(40),
      height: RFValue(40),
      backgroundColor: Colors.searchBackgroundColor,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputStyle: {
      fontSize: RFValue(14),
      fontFamily: 'Apercu Medium',
      width: '85%',
      height: RFValue(40),
      backgroundColor: Colors.searchBackgroundColor,
      borderRadius: RFValue(20),
      paddingHorizontal: RFValue(10)
    },
    topTabsContainer: {
      marginTop: RFValue(20),
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%'
    },
    unSelectedTabText: {
      fontSize: 14,
      fontFamily: Fonts.apercuMedium,
      color: Colors.whiteOpacity05
    },
    selectedTabText: {
      fontSize: 14,
      fontFamily: Fonts.apercuBold,
      color: 'white'
    },
    selectionBar: {
      marginTop: RFValue(10),
      height: RFValue(6),
      width: RFValue(23),
      borderRadius: RFValue(6),
      backgroundColor: 'white'
    },
    descriptionTap: {
      fontSize: 12,
      fontFamily: Fonts.apercuMedium,
      color: Colors.whiteOpacity05
    },
    listItem: {
      alignItems: 'center',
      marginVertical: RFValue(16)
    },
    categoryName: {
      fontSize: RFValue(40),
      fontFamily: Fonts.apercuBold
    },
    categoryNumber: {
      fontSize: RFValue(14),
      fontFamily: Fonts.apercuMedium
    },
    categoryDate: {
      fontSize: RFValue(14),
      fontFamily: Fonts.apercuMedium
    },
    longTermCategotyItem: {
      marginVertical: RFValue(6),
      flexDirection: 'row',
      justifyContent: 'center',
      marginEnd: RFValue(12)
    }
  });
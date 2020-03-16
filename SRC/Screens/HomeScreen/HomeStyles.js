import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export const HomeStyles = StyleSheet.create({
    mainContainer:{ 
        flex: 1,
        width:Dimensions.get('window').width, 
        alignItems:'center',
        justifyContent:'center' 
    },
    titleText:{
        fontFamily: 'Apercu Medium', 
        fontSize:14, 
        paddingBottom: 12,
        color:'white'
    },
    mainButton:{
        height: Dimensions.get('window').height * 0.35, 
        width: Dimensions.get('window').width * 0.9, 
        borderRadius: 20, 
        backgroundColor:'rgba(255,255,255,0.25)', 
        alignItems:'center', 
        paddingHorizontal:12, 
        paddingVertical:14, 
        justifyContent:'space-between',
        marginVertical:12
    },
    buttonTitle:{
        fontSize:45, 
        fontFamily:'Apercu Bold', 
        color:'white', 
        textAlign:'center', 
        marginBottom:12
    },
    buttonDesc:{
        fontSize:14, 
        fontFamily:'Apercu Regular', 
        color:'white', 
        textAlign:'center'
    },
    imageStyle:{
        width:26, 
        height:23
    },
})
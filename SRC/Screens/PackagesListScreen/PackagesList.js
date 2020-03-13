import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';

//PackagesImport
import LinearGradient from 'react-native-linear-gradient';
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

//Constants Import
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { ServiceTypes } from '../../Constants/ServiceTypes';
import { ServiceCategories } from '../../Constants/Categories';

//Styles Import
import Styles from './PackagesListStyles';
import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler';

export default class PackagesList extends Component {
  Categories = [
    {
      id: 1,
      category: ServiceCategories.nanny,
      number: 110,
      date: '10/9/2019'
    },
    {
      id: 2,
      category: ServiceCategories.chef,
      number: 50,
      date: '7/9/2019'
    },
    {
      id: 3,
      category: ServiceCategories.privateCoach,
      number: 200,
      date: '2/9/2019',
    },
    {
      id: 4,
      category: ServiceCategories.chaufeur,
      number: 100,
      date: '12/9/2019'
    },
    {
      id: 5,
      category: ServiceCategories.maid,
      number: 640,
      date: '1/9/2019'
    },
    {
      id: 6,
      category: ServiceCategories.gardener,
      number: 120,
      date: '15/9/2019'
    },
    {
      id: 7,
      category: ServiceCategories.worker,
      number: 56,
      date: '3/9/2019'
    },
    {
      id: 8,
      category: ServiceCategories.shepherd,
      number: 40,
      date: '14/9/2019'
    },
    {
      id: 9,
      category: ServiceCategories.privatePro,
      number: 40,
      date: '8/9/2019'
    },
    {
      id: 10,
      category: ServiceCategories.privateSailor,
      number: 20,
      date: '9/9/2019'
    },
    {
      id: 11,
      category: ServiceCategories.falconTrainer,
      number: 10,
      date: '20/9/2019'
    },
    {
      id: 12,
      category: ServiceCategories.nurse,
      number: 110,
      date: '19/9/2019'
    },
    {
      id: 13,
      category: ServiceCategories.groomer,
      number: 120,
      date: '11/9/2019'
    },
    {
      id: 14,
      category: ServiceCategories.houseKeeper,
      number: 534,
      date: '18/9/2019'
    },
    {
      id: 15,
      category: ServiceCategories.labourer,
      number: 120,
      date: '22/9/2019'
    },
    {
      id: 16,
      category: ServiceCategories.farmer,
      number: 100
    },
    {
      id: 17,
      category: ServiceCategories.agricultureEng,
      number: 9,
      date: '21/9/2019'
    },
    {
      id: 18,
      category: ServiceCategories.watchMan,
      number: 120,
      date: '23/9/2019'
    }
  ]

  constructor(props) {
    super(props);
    this.state = {
      selectedService: ServiceTypes.longTerm,
      dataCategories: this.Categories,
      selectedCategory: this.Categories[0]
    }
  }

  _renderSearchBar = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity style={[styles.drawerButton, {backgroundColor: this._selectColor()[1]}]}>
          <Image resizeMode='contain' source={require('../../Assets/Images/drawerIcon.png')} style={{ width: RFValue(22.7), height: RFValue(22.7) }} />
        </TouchableOpacity>
        <TextInput
          placeholder={'Try typing “Indonesian maid, 24”'}
          placeholderTextColor={Colors.whiteOpacity05}
          style={[styles.inputStyle, {backgroundColor: this._selectColor()[1]}]} />
      </View>
    )
  }

  _renderTopTabBar = () => {
    const { selectedService } = this.state;
    return (
      <View style={styles.topTabsContainer}>
        <TouchableWithoutFeedback onPress={() => this.setState({ selectedService: ServiceTypes.onDemand, selectedCategory: this.Categories[0] })}>
          <View style={{ alignItems: 'center', width: Dimensions.get('window').width * 0.2 }}>
            <Text style={selectedService === ServiceTypes.onDemand ? styles.selectedTabText : styles.unSelectedTabText}>ON DEMAND</Text>
            {selectedService === ServiceTypes.onDemand && <View style={[styles.selectionBar, { marginTop: RFValue(18) }]} />}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.setState({ selectedService: ServiceTypes.longTerm, selectedCategory: this.Categories[0] })}>
          <View style={{ alignItems: 'center', width: Dimensions.get('window').width * 0.53 }}>
            <Text style={selectedService === ServiceTypes.longTerm ? styles.selectedTabText : styles.unSelectedTabText}>LONG TERM</Text>
            {selectedService === ServiceTypes.longTerm && <Text style={styles.descriptionTap}>Starting from 6 month</Text>}
            {selectedService === ServiceTypes.longTerm && <View style={styles.selectionBar} />}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.setState({ selectedService: ServiceTypes.history, selectedCategory: this.Categories[0] })}>
          <View style={{ alignItems: 'center', width: Dimensions.get('window').width * 0.2 }}>
            <Text style={selectedService === ServiceTypes.history ? styles.selectedTabText : styles.unSelectedTabText}>HISTORY</Text>
            {selectedService === ServiceTypes.history && <Text style={styles.descriptionTap}>Search history</Text>}
            {selectedService === ServiceTypes.history && <View style={styles.selectionBar} />}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
  _renderListItem = (item) => {
    let isItemSelected = this.state.selectedCategory.id === item.id;
    if (this.state.selectedService === ServiceTypes.longTerm) {
      return (
        <TouchableOpacity style={styles.longTermCategotyItem} onPress={()=>this.setState({selectedCategory: item})}>
          <Text style={[styles.categoryName, { marginStart: RFValue(40), marginEnd: RFValue(6), fontFamily: isItemSelected ? Fonts.apercuBold : Fonts.apercuLight, color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.category}</Text>
          <Text style={[styles.categoryDate, { color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.number}</Text>
        </TouchableOpacity>
      )
    }
    if (this.state.selectedService === ServiceTypes.history) {
      return (
        <TouchableOpacity style={styles.listItem} onPress={()=>this.setState({selectedCategory: item})}>
          <Text style={[styles.categoryName, { color: isItemSelected ? 'white' : Colors.whiteOpacity05, fontFamily: isItemSelected ? Fonts.apercuBold : Fonts.apercuLight }]}>{item.category}</Text>
          <Text style={[styles.categoryDate, { color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.date}</Text>
        </TouchableOpacity>)
    }
  }
  _renderList = () => {
    return (
      <FlatList
        data={this.state.dataCategories}
        keyExtractor={category => category.id}
        style={{ height: Dimensions.get('window').height * 0.7, width: '100%' }}
        ItemSeparatorComponent={() => (this.state.selectedService === ServiceTypes.history && <View style={{ backgroundColor: 'rgba(255,255,255,0.25)', alignSelf: 'center', width: RFValue(36), height: RFValue(1) }} />)}
        renderItem={({ item }) => this._renderListItem(item)} />
    )
  }
  _selectColor=()=>{
    switch(this.state.selectedCategory.id){
      case 1:
        return [Colors.nanny, Colors.searchNanny];
      case 2:
        return [Colors.chefColor, Colors.searchChef];
      case 3: 
        return [Colors.privateCoach, Colors.searchPrivateCoach];
      case 4:
        return [Colors.chaufeur, Colors.searchChaufeur];
      case 5:
        return [Colors.maid, Colors.searchMaid];
      case 6: 
        return [Colors.gardener, Colors.searchGardener];
      case 7:
        return [Colors.worker, Colors.searchWorker];
      case 8: 
        return [Colors.shepherd, Colors.searchShepherd];
      case 9:
        return [Colors.privatePro, Colors.searchPrivatePro];
      case 10:
        return [Colors.privateSailor, Colors.searchPrivateSailor];
      case 11:
        return [Colors.falconTrainer, Colors.searchFalconTrainer];
      case 12:
        return [Colors.nurse, Colors.searchNurse];
      case 13:
        return [Colors.groomer, Colors.searchGroomer];
      case 14:
        return [Colors.houseKeeper, Colors.searchHouseKeeper];
      case 15:
        return [Colors.lobourer, Colors.searchLobourer];
      case 16: 
        return [Colors.farmer, Colors.searchFarmer];
      case 17:
        return [Colors.agricultureEng, Colors.searchAgricultureEng];
      case 18:
        return [Colors.watchMan, Colors.searchWatchMan];
      case 19:
        return [Colors.privateTutor, Colors.searchPrivateTutor];
    }
  }
  render() {
    return (
      <LinearGradient colors={[this._selectColor()[0], Colors.mainColor]} style={styles.screenContainer}>
        {this._renderSearchBar()}
        {this._renderTopTabBar()}
        {this._renderList()}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
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
    fontSize: RFValue(45),
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
})
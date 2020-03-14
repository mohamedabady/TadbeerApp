import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';

//PackagesImport
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler';

//Constants Import
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { ServiceTypes } from '../../Constants/ServiceTypes';

//Dummy Data Import
import {Categories} from './Categories';

//Styles Import
import {PackagesListStyles as styles} from './PackagesListStyles';

//Custom Components Import
import DrawerMenu from '../../Components/PackgesListComponents/DrawerMenu'

export default class PackagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedService: props.route.params.serviceType,
      dataCategories: Categories,
      selectedCategory: Categories[0],
      isDarwerOpen: false,
      isEnglish: true
    }
  }

  _renderSearchBar = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity style={[styles.drawerButton, {backgroundColor: this._selectColor()[1]}]} onPress={()=>this.setState({isDarwerOpen: true})}>
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
        <TouchableWithoutFeedback onPress={() => this.setState({ selectedService: ServiceTypes.onDemand, selectedCategory: Categories[0] })}>
          <View style={{ alignItems: 'center', width: Dimensions.get('window').width * 0.2 }}>
            <Text style={selectedService === ServiceTypes.onDemand ? styles.selectedTabText : styles.unSelectedTabText}>ON DEMAND</Text>
            {selectedService === ServiceTypes.onDemand && <View style={[styles.selectionBar, { marginTop: RFValue(18) }]} />}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.setState({ selectedService: ServiceTypes.longTerm, selectedCategory: Categories[0] })}>
          <View style={{ alignItems: 'center', width: Dimensions.get('window').width * 0.53 }}>
            <Text style={selectedService === ServiceTypes.longTerm ? styles.selectedTabText : styles.unSelectedTabText}>LONG TERM</Text>
            {selectedService === ServiceTypes.longTerm && <Text style={styles.descriptionTap}>Starting from 6 month</Text>}
            {selectedService === ServiceTypes.longTerm && <View style={styles.selectionBar} />}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => this.setState({ selectedService: ServiceTypes.history, selectedCategory: Categories[0] })}>
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
          <Text style={[styles.categoryName, { marginStart: RFValue(40), marginEnd: RFValue(4), fontFamily: isItemSelected ? Fonts.apercuBold : Fonts.apercuLight, color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.category}</Text>
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
        keyExtractor={category => category.id.toString()}
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
  _renderBackDrop=()=>{
    return(
      <TouchableWithoutFeedback onPress={()=>this.setState({isDarwerOpen: false})}>
        <View style={{flex:1, width:Dimensions.get('window').width, height:Dimensions.get('window').height, backgroundColor:'rgba(0,0,0,0.7)', position:'absolute', top:0, bottom:0, left:0, right:0}}/>
      </TouchableWithoutFeedback>
    )
  }

  render() {
    return (
      <LinearGradient colors={[this._selectColor()[0], Colors.mainColor]} style={styles.screenContainer}>
        <DrawerMenu isDrawerOpen={this.state.isDarwerOpen} closeDrawer={()=>this.setState({isDarwerOpen: false})} isEnglish={this.state.isEnglish}/>
        {this._renderSearchBar()}
        {this._renderTopTabBar()}
        {this._renderList()}
        {this.state.isDarwerOpen && this._renderBackDrop()}
      </LinearGradient>
    );
  }
}
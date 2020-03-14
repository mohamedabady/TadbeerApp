import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';

//PackagesImport
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity, TextInput, FlatList } from 'react-native-gesture-handler';
import SwipeUpDown from 'react-native-swipe-up-down';

//Constants Import
import { Colors } from '../../Constants/Colors';
import { Fonts } from '../../Constants/Fonts';
import { ServiceTypes } from '../../Constants/ServiceTypes';

//Dummy Data Import
import { Categories, Countries, Packages } from './StaticData'

//Styles Import
import { PackagesListStyles as styles } from './PackagesListStyles';

//Custom Components Import
import DrawerMenu from '../../Components/PackgesListComponents/DrawerMenu';
import SearchModal from '../../Components/PackgesListComponents/SearchModal';

export default class PackagesList extends Component {
  swipeUpDownRef;
  constructor(props) {
    super(props);
    this.state = {
      selectedService: props.route.params.serviceType,
      dataCategories: Categories,
      selectedCategory: Categories[0],
      isDarwerOpen: false,
      isEnglish: true,
      isSearchModalOpen: false,
      countries: Countries,
      packages: Packages
    }
  }

  _renderSearchBar = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity style={[styles.drawerButton, { backgroundColor: this._selectColor()[1] }]} onPress={() => this.setState({ isDarwerOpen: true })}>
          <Image resizeMode='contain' source={require('../../Assets/Images/drawerIcon.png')} style={{ width: RFValue(22.7), height: RFValue(22.7) }} />
        </TouchableOpacity>
        <TextInput
          placeholder={'Try typing “Indonesian maid, 24”'}
          placeholderTextColor={Colors.whiteOpacity05}
          style={[styles.inputStyle, { backgroundColor: this._selectColor()[1] }]} />
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
        <TouchableOpacity style={styles.longTermCategotyItem} onPress={() => this.setState({ selectedCategory: item })}>
          <Text style={[styles.categoryName, { marginStart: RFValue(40), marginEnd: RFValue(4), fontFamily: isItemSelected ? Fonts.apercuBold : Fonts.apercuLight, color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.category}</Text>
          <Text style={[styles.categoryDate, { color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.number}</Text>
        </TouchableOpacity>
      )
    }
    if (this.state.selectedService === ServiceTypes.history) {
      return (
        <TouchableOpacity style={styles.listItem} onPress={() => this.setState({ selectedCategory: item })}>
          <Text style={[styles.categoryName, { color: isItemSelected ? 'white' : Colors.whiteOpacity05, fontFamily: isItemSelected ? Fonts.apercuBold : Fonts.apercuLight }]}>{item.category}</Text>
          <Text style={[styles.categoryDate, { color: isItemSelected ? 'white' : Colors.whiteOpacity05 }]}>{item.date}</Text>
        </TouchableOpacity>)
    }
  }

  _renderList = () => {
    return (
      <FlatList
        horizontal={this.state.isSearchModalOpen}
        data={this.state.dataCategories}
        keyExtractor={category => category.id.toString()}
        style={{ maxHeight: Dimensions.get('window').height * 0.7, width: '100%' }}
        ItemSeparatorComponent={() => (this.state.selectedService === ServiceTypes.history && <View style={{ backgroundColor: 'rgba(255,255,255,0.25)', alignSelf: 'center', width: RFValue(36), height: RFValue(1) }} />)}
        renderItem={({ item }) => this._renderListItem(item)} />
    )
  }

  _selectColor = () => {
    switch (this.state.selectedCategory.id) {
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

  _renderBackDrop = () => {
    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ isDarwerOpen: false })}>
        <View style={{ flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: 'rgba(0,0,0,0.7)', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
      </TouchableWithoutFeedback>
    )
  }

  _renderFullItem = () => {
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
      <View style={{ paddingHorizontal: RFValue(20), backgroundColor: 'white', position: 'absolute', bottom: 0, width: Dimensions.get('window').width, alignSelf: 'center', borderTopLeftRadius: RFValue(20), borderTopRightRadius: RFValue(20), height: Dimensions.get('window').height * 0.7 }}>
        <View style={{ width: RFValue(37), height: RFValue(6), borderRadius: RFValue(3), backgroundColor: '#C1C1C1', alignSelf: 'center', marginVertical: RFValue(12) }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: RFValue(32) }}>
          <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>FROM</Text>
          <TouchableOpacity style={{ borderRadius: RFValue(10), height: RFValue(20), paddingHorizontal: RFValue(10), borderWidth: RFValue(1), borderColor: '#707070', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>SELECT ALL</Text>
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
                <Image resizeMode='contain' source={item.image} style={{ marginEnd: RFValue(10), height: RFValue(15), width: RFValue(15), borderRadius: RFValue(7.5), borderWidth: RFValue(0.5), borderColor: '#707070' }} />
                <Text style={{ fontSize: RFValue(24), fontFamily: Fonts.apercuMedium, color: '#707070' }}>{item.name}</Text>
              </TouchableOpacity>)
          }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: RFValue(32) }}>
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
                <Text style={{ fontSize: RFValue(24), fontFamily: Fonts.apercuMedium, color: '#707070' }}>{item.name}</Text>
              </TouchableOpacity>)
          }} />

        <Text style={{ fontFamily: Fonts.apercuBold, fontSize: RFValue(12), color: '#707070' }}>AGE</Text>

        <TouchableOpacity style={{marginTop:50, height:RFValue(50), width:Dimensions.get('window').width*0.9, backgroundColor:'#463795', justifyContent:'center', alignItems:'center'} }>
          <Text style={{fontSize:18, fontFamily:Fonts.apercuMedium, color:'white'}}>SEARCH</Text>
        </TouchableOpacity>



      </View>
    )
  }

  _openSearchModal() {
    this.SwipeUpDown.showFull();
    //this.flatListRef.scrollToIndex( { animated: false, index: this.state.selectedCategory.id, viewOffset:0.5, viewPosition:0.5 });
    this.setState({ isSearchModalOpen: true });
  }

  _renderSearchModalButton = () => {
    return (
      <TouchableOpacity onPress={() => this._openSearchModal()} style={{ borderTopLeftRadius: RFValue(20), borderTopRightRadius: RFValue(20), backgroundColor: '#F7F7F7', justifyContent: 'center', alignItems: 'center', height: RFValue(70), width: Dimensions.get('window').width * 0.8, alignSelf: 'center', marginBottom: '-3%' }}>
        <Text style={{ fontSize: RFValue(18), fontFamily: Fonts.apercuMedium, color: '#707070', alignSelf: 'center' }}>Tap to Search</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <LinearGradient colors={[this._selectColor()[0], Colors.mainColor]} style={styles.screenContainer}>
        <DrawerMenu isDrawerOpen={this.state.isDarwerOpen} closeDrawer={() => this.setState({ isDarwerOpen: false })} isEnglish={this.state.isEnglish} />
        {this._renderSearchBar()}
        {this._renderTopTabBar()}
        {this._renderList()}
        {this.state.isDarwerOpen && this._renderBackDrop()}
        {!this.state.isSearchModalOpen && this.state.selectedService === ServiceTypes.longTerm && this._renderSearchModalButton()}
        <SwipeUpDown
          hasRef={ref => this.SwipeUpDown = ref}
          swipeHeight={100}
          //itemMini={this._renderMiniItem()}
          onShowMini={() => this.setState({ isSearchModalOpen: false })}
          //onMoveDown={() => this.setState({ isSearchModalOpen: false })}
          itemFull={this._renderFullItem()}
          disablePressToShow={true}
          style={{ position: 'absolute', backgroundColor: 'transparent', bottom: 0 }} // style for swipe
        />
      </LinearGradient>
    );
  }
}
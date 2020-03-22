import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";
import { store, persistor } from './SRC/Store'
import { PersistGate } from 'redux-persist/integration/react'
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Import Tab Navigator
import TabNavigator from './SRC/Navigation/BottomTabNavigator';


//Import Main Navigation
import { MainStack } from './SRC/Navigation/MainNavigation';

let AppProvider = () => {
  return (
    <Provider store={store} syle={{ justifyContent: 'center', alignItems: 'center' }}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <SafeAreaProvider forceInset={{ bottom: 'never' }} >

          <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
          <MainStack />

        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      {/* <TabNavigator/> */}
      <AppProvider />
    </NavigationContainer>
  )
}

export default App;
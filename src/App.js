import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {AppStack} from './navigations/AppNavigator';


export default function App(){
    return (
      // <Provider store={store}>
      //   <Root>
      //     <NavigationContainer >
      //       <AppStack/>
      //     </NavigationContainer>
      //   </Root>
      // </Provider>
      
          <NavigationContainer >
            <AppStack/>
          </NavigationContainer>
    );
  
}

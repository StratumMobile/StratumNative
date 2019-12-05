import React from 'react';
import {View, StatusBar} from 'react-native';

import SwipeContainer from './components/SwipeContainer';

const App = () => (
  <View>
    <StatusBar barStyle="dark-content" />
    <SwipeContainer />
  </View>
);

export default App;

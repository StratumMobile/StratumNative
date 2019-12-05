import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const SwipeContainer = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Swipe Container</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
  },
})

export default SwipeContainer;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SecondScreen from './second';

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <SecondScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

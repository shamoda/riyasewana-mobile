import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import colors from './app/config/colors';
import SparePartDetailsScreen from './app/screens/SparePartDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SparePartDetailsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    // paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
});

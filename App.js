import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from "./styles";
import CityView from './screens/CityView/index';


export default function App() {
  return (
    <View style={styles.container}>
      <CityView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

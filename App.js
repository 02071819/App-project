import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { colors } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TravelScreen from "./screens/Screen/TravelScreen";

import Header from "./screens/components/Header";
import Amenities from "./screens/components/Amenities";
import Amenities2 from "./screens/components/Amenities2";
import Footer from "./screens/components/Footer";


function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barstyle="light-content" />
      <Header />

      <ScrollView>
        <Amenities />
        <Amenities2 />
      </ScrollView>

      <Footer />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"

        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Travel"
          component={TravelScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});

export default App;
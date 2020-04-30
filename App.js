import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { gs, colors } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TravelScreen from "./screens/Screen/TravelScreen";

import Header from "./screens/components/Header";
import Footer from "./screens/components/Footer";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barstyle="light-content" />
      <Header />

      <ScrollView>

        <View style={gs.sectionContainer}>
          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Travel')} style={styles.amentity}  >
                <Entypo name="camera" size={24} color={colors.lighth1} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>觀光</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer2}>
              <TouchableOpacity style={styles.amentity}>
                <Ionicons name="md-restaurant" size={26} color={colors.lighth1} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>美食</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer3}>
              <TouchableOpacity style={styles.amentity}>
                <FontAwesome name="hotel" size={24} color={colors.lighth1} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>住宿</Text>
            </View>
          </View>

        </View >

        <View style={gs.sectionContainer}>
          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer4}>
              <TouchableOpacity style={styles.amentity}>
                <FontAwesome5 name="bus" size={24} color={colors.lighth1} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>交通</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer5}>
              <TouchableOpacity style={styles.amentity}>
                <MaterialCommunityIcons name="weather-sunny" size={28} color={colors.lighth1} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>天氣</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer6}>
              <TouchableOpacity style={styles.amentity}>
                <Ionicons name="ios-school" size={26} color={colors.lighth1} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>教育</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

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
  amentitiesContainer: {
    marginTop: 25,
  },

  amentityContainer1: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    right: 228,
    top: -20,
  },
  amentityContainer2: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 105,
    top: -45,
  },
  amentityContainer3: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    top: -70,
  },
  amentity: {
    width: 50,
    height: 50,
    borderRadius: 48 / 2,
    ...gs.center,
    backgroundColor: "#444",
  },
  amenityName: {
    color: colors.lighth1,
    fontSize: 13,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
  amentityContainer4: {
    alignItems: "center",
    position: 'absolute',
    width: 95,
    left:-12,
    top:-25,
  },
  amentityContainer5: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 105,
    top:-50,
  },
  amentityContainer6: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    top:-75,
  },

});

export default App;
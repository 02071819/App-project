import React from 'react';
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { Ionicons, FontAwesome, Entypo, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { gs, colors } from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TravelScreen from "./screens/Screen/TravelScreen";
import Taipei101 from "./screens/Screen/Taipei101";
import ceremony1 from "./screens/Screen/ceremony1";
import ceremony2 from "./screens/Screen/ceremony2";
import West from "./screens/Screen/West";
import Museum from "./screens/Screen/Museum";
import Park from "./screens/Screen/Park";
import TaiwanMus from "./screens/Screen/TaiwanMus";
import Park2 from "./screens/Screen/Park2";
import RedBuild from "./screens/Screen/RedBuild";
import Egg from "./screens/Screen/Egg";
import NM1 from "./screens/Screen/NM1";
import NM2 from "./screens/Screen/NM2";
import NM3 from "./screens/Screen/NM3";
import NM4 from "./screens/Screen/NM4";
import NM5 from "./screens/Screen/NM5";

import Setting from './screens/Screen/Setting';
import Serve from './screens/Screen/Serve';

import Header from "./screens/components/Header";
import { SplashScreen } from 'expo';

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
                <Image source={require("./assets/tourism.png")} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>觀光</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer2}>
              <TouchableOpacity style={styles.amentity}>
                <Image source={require("./assets/vjku.png")} style={{ width: 100, height: 90, marginLeft: 8 }} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>美食</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer3}>
              <TouchableOpacity style={styles.amentity}>
                <Image source={require("./assets/Hotel.png")} style={{ width: 100, height: 90 }} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>住宿</Text>
            </View>
          </View>

        </View >
      </ScrollView>

    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const CityStack = () => {
  return (
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
      <Stack.Screen
        name="Taipei101"
        component={Taipei101}
      />
      <Stack.Screen
        name="ceremony1"
        component={ceremony1}
      />
      <Stack.Screen
        name="ceremony2"
        component={ceremony2}
      />
      <Stack.Screen
        name="West"
        component={West}
      />
      <Stack.Screen
        name="Museum"
        component={Museum}
      />
      <Stack.Screen
        name="Park"
        component={Park}
      />
      <Stack.Screen
        name="TaiwanMus"
        component={TaiwanMus}
      />
      <Stack.Screen
        name="Park2"
        component={Park2}
      />
      <Stack.Screen
        name="RedBuild"
        component={RedBuild}
      />
      <Stack.Screen
        name="Egg"
        component={Egg}
      />
      <Stack.Screen
        name="NM1"
        component={NM1}
      />
      <Stack.Screen
        name="NM2"
        component={NM2}
      />
      <Stack.Screen
        name="NM3"
        component={NM3}
      />
      <Stack.Screen
        name="NM4"
        component={NM4}
      />
      <Stack.Screen
        name="NM5"
        component={NM5}
      />
    </Stack.Navigator>
  );
}

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }>

        <Tab.Navigator
          initialRoute="Home"
          activeColor="#00BFFF"
          inactiveColor="#dedede"
          style={{ backgroundColor: '#000' }}
          barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}
        >
          <Tab.Screen name="首頁" component={CityStack}
            options={{
              tabBarLabel: '首頁',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen name="收藏" component={Serve}
            options={{
              tabBarLabel: '收藏',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen name="設定" component={Setting}
            options={{
              tabBarLabel: '設定',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="settings" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.text,
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
    // backgroundColor: "#444",
  },
  amenityName: {
    color: colors.darkBg,
    fontSize: 13,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
  },
  amentityContainer4: {
    alignItems: "center",
    position: 'absolute',
    width: 95,
    left: -12,
    top: -25,
  },
  amentityContainer5: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 105,
    top: -50,
  },
  amentityContainer6: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    top: -75,
  },

});

export default App;
import React, { useRef, useState, useContext, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native';
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
import mp101 from "./screens/Screen/mp101";
import mpcere1 from "./screens/Screen/mpcere1";
import mpcere2 from "./screens/Screen/mpcere2";
import mpWest from "./screens/Screen/mpWest";
import mpMus from "./screens/Screen/mpMus";
import mpPark1 from "./screens/Screen/mpPark1";
import mpTaiwanMus from "./screens/Screen/mpTaiwanMus";
import mpPark2 from "./screens/Screen/mpPark2";
import mpRB from "./screens/Screen/mpRB";
import mpEgg from "./screens/Screen/mpEgg";
import mpNM1 from "./screens/Screen/mpNM1";
import mpNM2 from "./screens/Screen/mpNM2";
import mpNM3 from "./screens/Screen/mpNM3";
import mpNM4 from "./screens/Screen/mpNM4";
import mpNM5 from "./screens/Screen/mpNM5";
import FoodScreen from "./screens/Screen/FoodScreen";
import mpfood1 from "./screens/Screen/mpfood1";
import mpfood2 from "./screens/Screen/mpfood2";
import mpfood3 from "./screens/Screen/mpfood3";
import mpfood4 from "./screens/Screen/mpfood4";
import mpfood5 from "./screens/Screen/mpfood5";
import mpfood6 from "./screens/Screen/mpfood6";
import mpfood7 from "./screens/Screen/mpfood7";
import HotelScreen from "./screens/Screen/HotelScreen";

import HomeData from "./screens/JSON/HomeAlbum.json";
import LoginScreen from "./screens/Screen/LoginScreen";
import Setting from './screens/Screen/Setting';
import Serve from './screens/Screen/Serve';
import Header from "./screens/components/Header";
import { SplashScreen } from 'expo';


function HomeScreen({ navigation }) {
  const [gallery, setgallery] = useState([
    {
      image: "https://github.com/02071819/App-project/blob/master/assets/%E9%87%91%E7%93%9C%E7%9F%B3-%E4%B8%80-1572516605.jpg?raw=true",
      title: '台北九份金瓜石',
      key: '1',
      desc: '九份是昔日台灣的採金礦中心，環山面海，擁有變化多端的山海美景，為一座小小的山城，保有著純樸的舊日生活風貌，其主要的景觀聚集在基山街，是九份最熱鬧的街道！金瓜石黃金博物館園區是日治時代的台灣礦業株式會社廠區，博物館內保留了大量日治時代的舊建築，建議步行延著日式宿舍群、太子賓館、黃金神社、金瓜石舊車站保持著濃濃的日式懷舊風，街道每一個轉角都是一個懷舊的日本風',
    },
    {
      image: "https://github.com/02071819/App-project/blob/master/assets/beauty.jpg?raw=true",
      title: '台北大直美麗華百樂園',
      key: '2',
      desc: '美麗華百樂園（Miramar Entertainment Park），是一間位於台灣台北市中山區的大型購物中心，營業面積約25,000坪，是美麗華集團的關係企業之一，2004年11月開業。美麗華百樂園是基隆河截彎取直整治計畫工程完成後、河畔新生地區域諸多新開發案之中規模最龐大者之一，設置在百貨商場建物樓頂的摩天輪，為大台北地區非常受歡迎的地標建築之一。',
    },
    {
      image: "https://github.com/02071819/App-project/blob/master/assets/monga.jpg?raw=true",
      title: '台北艋舺舊城 大稻埕',
      key: '3',
      desc: '跟隨當地導遊的步伐，一同走進艋舺的大街小巷，發現你不曾認識的艋舺。 除了艋舺最出名的龍山寺和剝皮寮外，你還將走過青草巷、艋舺公園、龍山美食廣場、萬華林宅、華江整宅等你可能聽過，但未曾一探的有趣地方。導遊將會為你發掘艋舺眾多有趣的故事。 你可能不知道，在艋舺300多年的歷史中，台北市的第一條路就建在艋舺，艋舺也是台北漢人最早開墾的地方。 現在的艋舺，宗廟、老字號店家與眾多產業在此林立，台北正在被逐漸遺忘的傳統中式生活，在艋舺這片台北的起源地上，你還可以通通找得到。 香火鼎盛的艋舺，帶動著附近店家的生意。那些百年老店們，用手藝與品質，緊緊抓住顧客的心。你將在艋舺品嚐到最美味、最正宗的當地美食。 艋舺雖然已經有上百年的歷史，但是卻處處可以看見創新的力量。放慢腳步，你會看見更多不同風貌的艋舺。',
    },
    {
      image: "https://github.com/02071819/App-project/blob/master/assets/7777777.jpg?raw=true",
      title: '七星主峰．小油坑火山生態',
      key: '4',
      desc: '「七星山主峰」海拔1120公尺，為台北市第一高峰，小百岳之一；七星山為一複式火山，地理上屬於大屯火山彙，峰項置有一等三角點，山頂視野寬闊，能將整個大台北地區一覽無遺。七星山約在七十萬年前開始噴發，頂部原有一噴火口（為破火山口地形），但在火山噴發結束後被侵蝕成七個大小不一的山頭，如同北斗七星而得名。「小油坑」海拔約805公尺，以「後火山作用」所形成之噴氣孔、硫磺結晶、溫泉及壯觀的崩塌地形最具特色。',
    },
    {
      image: "https://github.com/02071819/App-project/blob/master/assets/sunshine.jpg?raw=true",
      title: '台北陽明山國家公園及溫泉之旅',
      key: '5',
      desc: '陽明山國家公園是中華民國最早的國家公園之一，前身為日治時期成立之大屯國立公園。位於台北市近郊，陽明山原名草山，1950年總統蔣中正為紀念明代學者王陽明，將大屯山、七星山、紗帽山、小觀音山一帶，原名草山的山區改名為陽明山。大屯火山群為主的火山地型景觀是陽明山國家公園的主要特色。前山公園、陽明公園及七星公園三座公園，其中陽明公園遍植各種櫻花與其他花木，每年春季百花齊放，其間所舉行的陽明山花季均能吸引滿山人潮，為全台最知名的賞花節慶之一。',
    },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get('window');

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
            style={styles.LocationIcon} />
        </TouchableOpacity>
      </View>
    );
  }

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
                <Image
                  style={{ width: 100, height: 93 }}
                  source={{ uri: HomeData.Image[0].icon1 }}
                />
              </TouchableOpacity>
              <Text style={styles.amenityName}>觀光</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FoodScreen')} style={styles.amentity}>
                <Image source={{ uri: HomeData.Image[0].icon2 }} style={{ width: 100, height: 90, marginLeft: 8 }} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>美食</Text>
            </View>
          </View>

          <View style={styles.amentitiesContainer}>
            <View style={styles.amentityContainer3}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HotelScreen')} style={styles.amentity}>
                <Image source={{ uri: HomeData.Image[0].icon3 }} style={{ width: 100, height: 90 }} />
              </TouchableOpacity>
              <Text style={styles.amenityName}>住宿</Text>
            </View>
          </View>

          <View style={styles.carouselContainer}>
            <Carousel style={styles.carousel}
              data={gallery}
              renderItem={renderItem}
              itemWidth={200}
              containerWidth={width - 20}
              seperatorWidth={0}
              ref={carouselRef}
              inActiveOpacity={0.4}
            />
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
      <Stack.Screen
        name="mp101"
        component={mp101}
      />
      <Stack.Screen
        name="mpcere1"
        component={mpcere1}
      />
      <Stack.Screen
        name="mpcere2"
        component={mpcere2}
      />
      <Stack.Screen
        name="mpWest"
        component={mpWest}
      />
      <Stack.Screen
        name="mpMus"
        component={mpMus}
      />
      <Stack.Screen
        name="mpPark1"
        component={mpPark1}
      />
      <Stack.Screen
        name="mpTaiwanMus"
        component={mpTaiwanMus}
      />
      <Stack.Screen
        name="mpPark2"
        component={mpPark2}
      />
      <Stack.Screen
        name="mpRB"
        component={mpRB}
      />
      <Stack.Screen
        name="mpEgg"
        component={mpEgg}
      />
      <Stack.Screen
        name="mpNM1"
        component={mpNM1}
      />
      <Stack.Screen
        name="mpNM2"
        component={mpNM2}
      />
      <Stack.Screen
        name="mpNM3"
        component={mpNM3}
      />
      <Stack.Screen
        name="mpNM4"
        component={mpNM4}
      />
      <Stack.Screen
        name="mpNM5"
        component={mpNM5}
      />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
      />
      <Stack.Screen
        name="mpfood1"
        component={mpfood1}
      />
      <Stack.Screen
        name="mpfood2"
        component={mpfood2}
      />
      <Stack.Screen
        name="mpfood3"
        component={mpfood3}
      />
      <Stack.Screen
        name="mpfood4"
        component={mpfood4}
      />
      <Stack.Screen
        name="mpfood5"
        component={mpfood5}
      />
      <Stack.Screen
        name="mpfood6"
        component={mpfood6}
      />
      <Stack.Screen
        name="mpfood7"
        component={mpfood7}
      />
      <Stack.Screen
        name="HotelScreen"
        component={HotelScreen}
      />
    </Stack.Navigator>
  );
}

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAfJjBh-q89uGaYzWGh6W3BEHWjbqFDWsY",
      authDomain: "f2e2020-93de0.firebaseapp.com",
      databaseURL: "https://f2e2020-93de0.firebaseio.com",
      projectId: "f2e2020-93de0",
      storageBucket: "f2e2020-93de0.appspot.com",
      messagingSenderId: "195178592876",
      appId: "1:195178592876:web:0f891d50ca8f77a52e3649",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }, []);


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
          <Tab.Screen name="我的" component={LoginStack}
            options={{
              tabBarLabel: '我的',
              tabBarIcon: ({ color }) => (
                <Ionicons name="md-person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        option={{
          headerTitleStyle: {
            fontWeight: "400",
            fontSize: 20,
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
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
    top: -5,
  },
  amentityContainer2: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 105,
    top: -30,
  },
  amentityContainer3: {
    alignItems: "center",
    width: 95,
    position: 'absolute',
    left: 230,
    top: -55,
  },
  amentity: {
    width: 50,
    height: 50,
    borderRadius: 48 / 2,
    ...gs.center,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
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
  carouselContainer: {
    marginTop: 70,
    width: "100%",
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImage: {
    width: 200,
    height: 250,
    borderRadius: 10,
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0,9)',
  },
  carouselText: {
    fontSize:12,
    padding: 14,
    color: colors.text,
    bottom: 45,
    left: 13,
    fontWeight: 'bold',
  },
  LocationIcon: {
    position: "absolute",
    top: 215,
    left: 3,
  },
});

export default App;
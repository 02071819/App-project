import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { colors } from '../../styles';


export default function Serve() {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.LibraryButton}>
          <Image source={require("../../assets/Library.jpg")} style={{width:180, height:150}}/>
          <Text style={styles.Librarytext}>圖書館</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.GarbageButton}>
          <Image source={require("../../assets/Garbage.jpeg")} style={{width:180, height:150}}/>
          <Text style={styles.Librarytext}>垃圾車</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.HospitalButton}>
          <Image source={require("../../assets/Hospital.jpg")} style={{width:180, height:150}}/>
          <Text style={styles.Librarytext}>市醫掛號</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.WifiButton}>
          <Image source={require("../../assets/Wifi.png")} style={{width:180, height:150}}/>
          <Text style={styles.Librarytext}>WiFi熱點</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.ServeButton}>
          <Image source={require("../../assets/Serve.jpg")} style={{width:180, height:150}}/>
          <Text style={styles.Librarytext}>福利機構</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LibraryButton:{
    position:"absolute",
    padding:5,
    paddingBottom:15,
    backgroundColor:"#444",
    left:-195,
    top:-320,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  Librarytext: {
    color:"white",
    fontSize:30,
    position:'relative',
    top:5,
    textAlign: "center",
  },
  GarbageButton:{
    position:"absolute",
    padding:5,
    paddingBottom:15,
    backgroundColor:"#444",
    left:5,
    top:-320,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  HospitalButton:{
    position:"absolute",
    padding:5,
    paddingBottom:15,
    backgroundColor:"#444",
    left:-195,
    top:-100,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  WifiButton:{
    position:"absolute",
    padding:5,
    paddingBottom:10,
    backgroundColor:"#444",
    left:5,
    top:-100,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  ServeButton:{
    position:"absolute",
    padding:5,
    paddingBottom:15,
    backgroundColor:"#444",
    left:-195,
    top:120,
    borderColor: "#ddd",
    borderWidth: 2,
  },
});
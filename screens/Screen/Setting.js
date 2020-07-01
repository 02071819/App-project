import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { colors } from '../../styles';
import React, { useState } from "react";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Input from "../components/Input";
import LoginScreen from "./LoginScreen";
import { FontAwesome, AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import LoginData from "../JSON/LoginAlbum.json";

const Stack = createStackNavigator();

const Setting = ({ navigation }) => {
    const onSignOut = () => {
        firebase.auth().signOut();
        navigation.navigate("LoginScreen");
    };
    return (
        <View style={styles.container}>
            <View style={styles.Head}>
                <Image source={{ uri: LoginData.Image[0].signouthead }} style={styles.Headperson}></Image>
            </View>
            <TouchableOpacity style={styles.myprofile}>
                <Text style={styles.myprofileT}>My Profile</Text>

                <Ionicons name="md-person" size={20} color={colors.darkHl}
                    style={styles.LocationIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.favorite}>
                <Text style={styles.favoriteT}>Favorite</Text>
                <AntDesign name="heart" size={18} color={colors.darkHl}
                    style={styles.LocationIcon1} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.help}>
                <Text style={styles.helpT}>Help</Text>
                <FontAwesome name="question-circle" size={20} color={colors.darkHl}
                    style={styles.LocationIcon2} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.aboutus}>
                <Text style={styles.aboutusT}>About Us</Text>
                <FontAwesome name="exclamation-circle" size={20} color={colors.darkHl}
                    style={styles.LocationIcon3} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.signout} onPress={onSignOut}>
                <Text style={styles.signoutT}>Sign Out</Text>
                <Octicons name="sign-out" size={20} color={colors.darkHl}
                    style={styles.LocationIcon4} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8E8E8",
    },
    Head: {
        backgroundColor: "#250176",
        height: 250,
        width: "100%",
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
    },
    Headperson:{
        width: 100,
        height: 100,
        marginTop: 80,
        marginLeft: 140,
    },
    myprofile: {
        padding: 5,
        paddingTop: 10,
        paddingLeft: 75,
        position: "absolute",
        top: 280,
        left: 75,
        backgroundColor: colors.text,
        width: 225,
        height: 40,
        borderRadius: 60,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 3 }
    },
    myprofileT: {
        color: "#6E6E6E",
        fontWeight: "500",
    },
    favorite: {
        padding: 5,
        paddingTop: 10,
        paddingLeft: 83,
        position: "absolute",
        top: 340,
        left: 75,
        backgroundColor: colors.text,
        width: 225,
        height: 40,
        borderRadius: 60,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 3 }
    },
    favoriteT: {
        color: "#6E6E6E",
        fontWeight: "500",
    },
    help: {
        padding: 5,
        paddingTop: 10,
        paddingLeft: 93,
        position: "absolute",
        top: 400,
        left: 75,
        backgroundColor: colors.text,
        width: 225,
        height: 40,
        borderRadius: 60,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 3 }
    },
    helpT: {
        color: "#6E6E6E",
        fontWeight: "500",
    },
    aboutus: {
        padding: 5,
        paddingTop: 10,
        paddingLeft: 78,
        position: "absolute",
        top: 460,
        left: 75,
        backgroundColor: colors.text,
        width: 225,
        height: 40,
        borderRadius: 60,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 3 }
    },
    aboutusT: {
        color: "#6E6E6E",
        fontWeight: "500",
    },
    signout: {
        padding: 5,
        paddingTop: 10,
        paddingLeft: 79,
        position: "absolute",
        top: 520,
        left: 75,
        backgroundColor: colors.text,
        width: 225,
        height: 40,
        borderRadius: 60,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 3 }
    },
    signoutT: {
        color: "#6E6E6E",
        fontWeight: "500",
    },
    LocationIcon: {
        position: "absolute",
        marginTop: 8,
        left: 40,
    },
    LocationIcon1: {
        position: "absolute",
        marginTop: 12,
        left: 40,
    },
    LocationIcon2: {
        position: "absolute",
        marginTop: 10,
        left: 40,
    },
    LocationIcon3: {
        position: "absolute",
        marginTop: 10,
        left: 40,
    },
    LocationIcon4: {
        position: "absolute",
        marginTop: 12,
        left: 40,
    },
    // thumbnailContainerStyle: {
    //     flexDirection: "row",
    //     justifyContent: "flex-start"
    // },
    // headerContentStyle: {
    //     flexDirection: "column",
    //     justifyContent: "space-around",
    //     paddingLeft: 10
    // },
    // cardContainerStyle: {
    //     borderWidth: 2,
    //     borderRadius: 2,
    //     borderColor: "#ddd",
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 2,
    //     elevation: 1,
    //     marginLeft: 5,
    //     marginRight: 5,
    //     marginTop: 10
    // },
    // cardSectionStyle: {
    //     padding: 10,
    //     backgroundColor: "#444",
    //     borderColor: "#ddd",
    //     borderBottomWidth: 1
    // },
    // headerStyle: {
    //     backgroundColor: "#444",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: 70,
    //     paddingTop: 30,
    //     shadowColor: "#000",
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.2,
    //     // Android Only
    //     elevation: 2
    // },
    // textStyle: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     top: -5,
    //     fontSize: 30,
    //     color: "#fff",
    // },
    // ButtonText: {
    //     color: "#fff",
    //     fontSize: 28,
    // },
});
export default Setting;
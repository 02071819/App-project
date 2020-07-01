import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { colors } from '../../styles';
import React, { useState } from "react";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Input from "../components/Input";
import Setting from '../Screen/Setting';
import Confirm from "../components/Confirm";
import LoginData from "../JSON/LoginAlbum.json";

const Stack = createStackNavigator();

const Recents = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    // const [showModel, setShowModel] = useState(false);
    const onSignIn = async () => {
        setError(" ");
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate("Setting");
        } catch (err1) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                // setShowModel(false);
                setEmail("");
                setPassword("");
                setError("");
                navigation.navigate("Setting");
            } catch (err2) {
                setError(err2.message);
            }
        }
    };
    // const onCreateUser = async () => {
    //     try {
    //         await firebase.auth().createUserWithEmailAndPassword(email, password);
    //         setShowModel(false);
    //         setError("");
    //         setEmail("");
    //         setPassword("");

    //     } catch (err) {
    //         setShowModel(false);
    //         setError(err.message);
    //         setEmail("");
    //         setPassword("");
    //     }
    // };

    // const onCLoseModal = () => {
    //     setShowModel(false);
    //     setError("");
    //     setEmail("");
    //     setPassword("");
    // };
    return (
        <View style={styles.container}>
            <View style={styles.Head}>
                <Image source={{ uri: LoginData.Image[0].signinhead }} style={styles.Headtext}></Image>
            </View>
            <View style={styles.formstyle}>
                <Input
                    labelStyle={{ marginTop: 20 }}
                    label="Email"
                    placeholder="信箱"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <Input
                    labelStyle={{ marginTop: 20 }}
                    label="Password"
                    placeholder="密碼"
                    secureTextEntry
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />

                <TouchableOpacity style={styles.signin} onPress={onSignIn}>
                    <Text style={styles.signinT}>Sign In</Text>
                </TouchableOpacity>
                <Text style={{ padding: 10, fontSize: 12, color: 'red' }}>{error}</Text>
            </View>
            {/* <Confirm
                title="Are you sure to create a new user?"
                visible={showModel}
                onAccept={onCreateUser}
                onDecline={onCLoseModal}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    formstyle: {
        marginTop: 10,
    },
    Head: {
        backgroundColor: "#250176",
        height: 200,
        width: "100%",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
    Headtext: {
        width: 200,
        height: 150,
        marginTop: 40,
        marginLeft: 80,
    },
    signin: {
        marginTop: 20,
        marginLeft: 85,
        backgroundColor: "#250176",
        width: 205,
        height: 40,
        padding: 5,
        paddingLeft: 70,
        paddingTop: 5,
        borderRadius: 60,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 5 }
    },
    signinT: {
        fontSize: 20,
        color: "white",
        fontWeight: "500",
    }

});
export default Recents;
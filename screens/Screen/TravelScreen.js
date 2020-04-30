import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import { AntDesign, Octicons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

export default function TravelScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerstyle}>
                <Image source={require("../../assets/jiufen-taipei.jpg")} style={styles.HeadImg} />
                
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={24} color={colors.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.HeadSearch}>
                    <Octicons name="search" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>

            <View>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    },
    headerstyle: {
        backgroundColor: colors.darkBg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 12,
        elevation: 2,
    },
    HeadSearch: {
        position: 'relative',
        right: 15,
    },
    HeadImg: {
        width: 375,
        height: 450,
        position: "absolute",
        borderBottomRightRadius: 65,
    },
});

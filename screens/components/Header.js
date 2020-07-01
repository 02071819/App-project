import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { colors, gs } from "../../styles";
import HomeData from "../JSON/HomeAlbum.json"

export default function Header() {
    return (
        <View>
            <Image source={{ uri: HomeData.Image[0].header }} style={{
                width: "100%", height: 270, borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
            }} />
            <Text style={styles.HeadTitle}>T A I P E I</Text>
            <Text style={styles.HeadText}>帶領您造訪臺北，給您美好的一天</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    topButtonRight: {
        marginLeft: 1,
        marginBottom: 2,
        color: "#fff",
    },
    topButtons: {
        ...gs.rowBetween,
        position: 'absolute',
        top: 54,
        left: 290,
        width: 45,
        height: 45,
        backgroundColor: colors.darkBg,
        ...gs.center,
        borderRadius: 56 / 2,
    },
    HeadTitle: {
        color: colors.text,
        fontSize: 46,
        fontWeight: "500",
        position: "absolute",
        top: 100,
        left: 40,
    },
    HeadText: {
        color: colors.text,
        fontSize:14,
        fontWeight: "500",
        position: "absolute",
        top:170,
        left: 45,
    }
});
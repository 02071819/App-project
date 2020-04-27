import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { colors, gs } from "../../../styles";

export default function Header() {
    return (
        <View>
            <Image source={require("../../../assets/Taipei_Landscape.jpg")} style={{ width: "100%", height: 300 }} />
            <TouchableOpacity style={styles.topButtons}>
                <View style={gs.rowCenter}>
                    <MaterialIcons name="person" size={33} style={styles.topButtonRight} />
                </View>
            </TouchableOpacity>

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

});
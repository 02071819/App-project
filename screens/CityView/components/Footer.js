import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { gs, colors } from "../../../styles";
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';

const Footer = () => {
    return (
        <View>
            <View style={styles.footerBookStyle}>

                <TouchableOpacity style={styles.BtnBoxStyle}>
                    <MaterialIcons name="home" size={24} color={colors.lighth1} />
                    <Text style={styles.BtnTextStyle}>首頁</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BtnBoxStyle}>
                    <FontAwesome name="heart" size={24} color={colors.lighth1} />
                    <Text style={styles.BtnTextStyle}>服務</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.BtnBoxStyle}>
                    <Ionicons name="md-settings" size={24} color={colors.lighth1} />
                    <Text style={styles.BtnTextStyle}>設定</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerBookStyle: {
        backgroundColor: "#444",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 76,
    },
    BtnBoxStyle: {
        ...gs.center,
    },
    BtnTextStyle: {
        fontSize: 14,
        color: "#818181",
    },
    FooterBtnStyle: {
        height: 18,
        width: 18,
    },
});

export default Footer;

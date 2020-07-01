import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function NM4({ navigation }) {
    const GotoNM4map = () => {
        navigation.navigate('mpNM4')
    }

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/NM44.jpg")} style={styles.Imgstyle} />
            <View style={gs.rowCenter}>
                {starColors.map((color, index) => {
                    return (
                        <FontAwesome name="star" size={14} color={color} key={index} style={{ marginHorizontal: 2, position: 'relative', bottom: 45, left: 35 }} />
                    );
                })}
            </View>
            <View style={gs.rowCenter}>
                {starColors1.map((color, index) => {
                    return (
                        <FontAwesome name="star-half-empty" size={14} color={color} key={index} style={{ marginHorizontal: 2, marginLeft: 70, position: 'absolute', bottom: 45, left: 35 }} />
                    );
                })}
            </View>
            <Text style={styles.starnum}>4.1</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Travel')}>
                <AntDesign name="left" size={24} style={styles.AngleStyle} />
            </TouchableOpacity>

            <Text style={styles.Title101}>公館商圈</Text>


            <ScrollView>
                <TouchableOpacity onPress={GotoNM4map}>
                <Image source={require("../../assets/location.png")} style={styles.loimg} />
                    <Text style={styles.IntrodTitle}>Taipei</Text>
                </TouchableOpacity>

                <Text style={styles.Introd101}>公館商圈是台北市南區的繁華生活商圈，整整涵蓋了羅斯福路、汀洲路與新生南路，且鄰近有臺灣大學、師範大學等校區。由於此處是通往景美、木柵、新店的主要交通據點，因而成為景美女中、世新與政治大學等學生群轉程公車、捷運的地點，再加上大量聚集的學生人潮進而帶來許多商機，成為學生群們日常生活中吃喝玩樂的最佳場所。
在早期民國40年時代的公館，原本是一片農田，於民國50年時，隨著東南亞戲院的開幕，而成為專播二輪西片的戲院。同時也是當時青年學子談戀愛的最佳約會地點。民國70、80年時，公館成為的日益重要的交通地帶，鄰近的商店也越來越多。於民國90年，隨著捷運新店線的開通，公館捷運站成為整個街區的中心。因此，公館商圈對於40年代的人來說，也是享受日常生活吃喝玩樂的原鄉。</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.text,
        flex: 1,
    },
    Imgstyle: {
        width: "100%",
        height: 300,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    Title101: {
        fontSize: 21,
        fontWeight: 'bold',
        color: colors.text,
        position: 'absolute',
        marginTop: 220,
        marginLeft: 35,
    },
    
    Introd101: {
        paddingHorizontal: 25,
        fontSize: 13,
        fontWeight: "500",
        color: colors.darkHl,
        opacity: 0.5,
        justifyContent: 'flex-start',
        textAlign: 'justify',
        marginTop: 20,
    },
    AngleStyle: {
        color: colors.text,
        position: 'absolute',
        bottom: 245,
        left: 15,
    },
    starnum: {
        color: "#e3ab53",
        position: 'absolute',
        top: 252,
        left: 125,
    },
    IntrodTitle: {
        fontSize: 18,
        color: "black",
        marginLeft: 65,
        marginTop: 15,
        fontWeight: "500",
    },
    loimg: {
        width: 28,
        height: 28,
        position:"absolute",
        left:33,
        top:10,
    },
});
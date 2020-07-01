import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import MapView from "react-native-maps";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function Taipei101({ navigation }) {

    const Goto101map = () => {
        navigation.navigate('mp101')
    }

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/taipei-101-fireworks-2-1024x1024.jpeg")} style={styles.Imgstyle} />
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
            <Text style={styles.starnum}>4.4</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Travel')}>
                <AntDesign name="left" size={24} style={styles.AngleStyle} />
            </TouchableOpacity>

            <Text style={styles.Title101}>臺北101</Text>

            <ScrollView>
                <TouchableOpacity onPress={Goto101map}>
                    <Image source={require("../../assets/location.png")} style={styles.loimg} />
                    <Text style={styles.IntrodTitle}>Taipei</Text>
                </TouchableOpacity>

                <Text style={styles.Introd101}>臺北101購物中心為地上5樓，地下1樓的購物空間，23000坪，是臺灣首座國際頂級購物中心。擁有許多精品旗艦店，如BALLY、LV、Prada、Gucci、Cartier、DIOR及FENDI等，消費者可以享受到最多樣的選擇，與全球流行零時差，輕鬆擁有愉悅的購物時刻。
                     臺北101購物中心有歐式、日式、泰式、中式等各國風味美食餐廳，美食街擁有上千個座位，非常舒適的用餐環境。4樓都會廣場擁有完美的空間設計規劃，佔地500餘坪，挑高40米。採光自然，與四周的露天座椅融合為一體，散發著明亮開闊的現代氛圍。</Text>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.text,
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
        position: "relative",
        flex: 1
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
        color: colors.darkBg,
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
        position: "absolute",
        left: 33,
        top: 10,
    },
});
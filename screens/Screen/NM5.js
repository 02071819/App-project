import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function NM5({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/nm55.jpg")} style={styles.Imgstyle} />
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

            <Text style={styles.Title101}>士林觀光夜市</Text>


            <ScrollView>
                <Text style={styles.IntrodTitle}>景點介紹</Text>
                <Text style={styles.Introd101}>必吃美食：蚵仔煎、大餅包小餅、生炒花枝、雪花冰、青蛙下蛋、雞排、臭豆腐、生煎包、藥燉排骨、士林大香腸
士林夜市是臺北市範圍最大的夜市，也是國外觀光客造訪臺北必到的觀光夜市。佔地十分寬廣，可分為兩個主要範圍，一個是傳統陽明戲院周邊的街道，包括大南路慈諴宮一帶；另一邊則是基河路101號重新營運的士林市場。
來逛夜市的人大都以美食與購物為主，這裡有各式各樣新奇好玩的商品與美食，便宜又大碗，吸引大批的人潮。這樣特殊的夜市文化，是臺北夜生活不可缺少的一部份。最為著名的莫過於多樣的美食小吃，可說是臺灣美食大集合，像金黃色的超大雞排，香噴噴的「豪大大雞排」外脆內嫩； 吃上癮的「串烤」；香氣四溢的「士林大香腸」；會噴湯汁的「上海生煎包」；包著滿滿紅燒肉、蛋酥的「潤餅捲」；甜甜鹹鹹的「大餅包小餅」嚼勁十足；熱騰騰的「藥膳排骨湯」補補身子；特有的生炒花枝、青蛙下蛋、三兄弟豆花、蔥油餅、炒蟹腳等，都是令人直吞口水的美食小吃，讓人駐足不前、流連忘返。</Text>
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
    IntrodTitle: {
        fontSize: 18,
        color: colors.darkBg,
        marginLeft: 25,
        marginTop: 30,
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
        left:15,
    },
    starnum: {
        color: "#e3ab53",
        position: 'absolute',
        top: 252,
        left: 125,
    },
});
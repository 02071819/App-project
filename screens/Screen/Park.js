import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function Park({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/5c359ccd2091d.jpg")} style={styles.Imgstyle} />
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

            <Text style={styles.Title101}>華山1914文創園區</Text>


            <ScrollView>
                <Text style={styles.IntrodTitle}>景點介紹</Text>
                <Text style={styles.Introd101}>華山文創園區所在地的名稱由來，在清朝時期原稱三板橋庄大竹圍，至西元1922年，日治時期台灣總督府廢台北舊有街庄名，改稱「樺山町」。
而「樺山」的名稱乃取自日本治台的首任台灣總督「樺山資紀」的名字而來，當時位於樺山町包含台北市役所（今行政院院址），樺山貨運站，台北酒廠等政府單位，是日治時期台北市都市計畫所規畫開發的地區。其中樺山貨運站於1940年，因台北火車站改建，在樺山町增設貨運站，與台北酒廠的鐵路酒廠支線相連。至國民政府時期再將「樺山」改為「華山」，並沿用至今。
為臺灣台北市市定古蹟之一。在1999年後，成為提供給藝文界、非營利團體及個人使用的藝術展覽、音樂表演等文化活動場地。此外，園區內也有多間餐廳、店舖、藝廊等商業設施，該園區至今已舉辦多次藝文展演活動，園區內的舊建築物翻新、裝置藝術，吸引民眾前來參觀、拍照。</Text>
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
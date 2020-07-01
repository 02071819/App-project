import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function NM3({ navigation }) {
    const GotoNM3map = () => {
        navigation.navigate('mpNM3')
    }

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/NM33.jpg")} style={styles.Imgstyle} />
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
            <Text style={styles.starnum}>4</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Travel')}>
                <AntDesign name="left" size={24} style={styles.AngleStyle} />
            </TouchableOpacity>

            <Text style={styles.Title101}>東區商圈</Text>


            <ScrollView>
                <TouchableOpacity onPress={GotoNM3map}>
                <Image source={require("../../assets/location.png")} style={styles.loimg} />
                    <Text style={styles.IntrodTitle}>Taipei</Text>
                </TouchableOpacity>

                <Text style={styles.Introd101}>各家百貨公司林立的區域氣氛，讓各國的精品名店也紛紛進駐，為東區商圈帶來繁榮的景象。不論是以年輕族群為主的運動品牌，高價位的各式精品也能在各個路口彰顯，各種新奇創意的美食亦藏身在巷弄之間。 常可在街頭發現身著時尚裝扮的人士逛街採買，成為臺北市時尚流行知名度最高的消費商業密集地區。在東區的巷弄中，有許多具獨特自我風格的特色店家，而「東區NEXT」將打造與東區邂逅的三種視角，讓民眾能一一探索東區迷人之處。包含「潮東區」、「品東區」、「夜東區」的三種視角背後的一群風格店家，不論是代表著「潮」流時尚，結合最新VR科技體驗及旅遊的旅行樂園「時刻旅行」，一間小店就能提供各地即時完善的旅行資訊，並提供消費者現場享受這段旅程，時刻旅行李執行長說，我們創造的是一種新型態的體驗經濟模式，要讓人們來東區，就能環遊世界；另也有呈現東區高質感、高「品」質，以和牛料理為主打特色的「一味私房御膳」，木質和風的店內裝潢，更讓人彷彿身處產地島嶼奇境，一味的老闆阿比是在地東區人，見證了淘兒唱片行、泡沫紅茶的東區時代，帶著使命感回到了東區，經營許多間表達現代人「生活」樣態的業種，要讓東區的時代味再次甦醒；還有代表東區獨特的越「夜」越美麗、深夜不打烊的店家，均邀請民眾親自走訪，細細發掘東區店家的獨特魅力。
剛出爐的2019《臺北米其林指南》星級餐廳名單，其中榮獲二星評等的鮨天本，以及大腕燒肉食堂、MUME、吉兆割烹壽司、鰭野村のむらNomura等一星米其林餐廳也均位於東區，展現東區的美食活力。</Text>
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
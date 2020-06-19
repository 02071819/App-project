import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function NM1({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/NM00.jpg")} style={styles.Imgstyle} />
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
            <Text style={styles.starnum}>4.5</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Travel')}>
                <AntDesign name="left" size={24} style={styles.AngleStyle} />
            </TouchableOpacity>

            <Text style={styles.Title101}>信義商圈</Text>


            <ScrollView>
                <Text style={styles.IntrodTitle}>景點介紹</Text>
                <Text style={styles.Introd101}>台北101、新光三越、Bellavita、統一阪急百貨、誠品信義旗艦店等，是台北精緻時尚與都會名牌的潮爆區域，購物、娛樂、休閒、美食等活動應有盡有!
信義計畫區為新興商業區，乃目前臺北市最具指標性的時髦都會商圈，信義商圈最大的特色是，完全針對都市人休閒購物需求設計，而且由於採取低密度、低容積的開發方式，再加上市政府刻意經營，規劃設置相當多的造景，進駐的百貨商場或企業大樓，建築風格都也都別具特色。
範圍除了指標性的台北世界貿易中心、台北101之外，週邊還有許多企業集團的辦公設施，如國泰金融中心、南山人壽、遠雄集團總部大樓、ING安泰人壽、震旦行、群益證券金融大樓、中油企業總部等，此外還有不少的百貨公司和娛樂設施，如新光三越信義新天地、信義威秀影城、ATT 4 FUN、Bellavita、Neo19、統一阪急百貨、誠品信義旗艦店及君悅飯店、W飯店、艾美酒店等，現在已經躍升為臺北主要的商業區之一。
信義商圈由於發達的金融商業及企業總部林立，而有「台北曼哈頓」的別稱。週末假日的信義商圈，又搖身一變成為一個超大型的舞台，市府廣場、新光三越東側廣場的新舞台，經常舉辦各種假日活動或園遊會，而威秀影城中庭也常有歌手新片發表、演唱活動、簽名，而電影造勢活動，威秀影城中庭也常是第一選擇的場地。</Text>
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
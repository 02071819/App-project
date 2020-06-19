import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function Park({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/egg2.jpg")} style={styles.Imgstyle} />
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
            <Text style={styles.starnum}>4.3</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Travel')}>
                <AntDesign name="left" size={24} style={styles.AngleStyle} />
            </TouchableOpacity>

            <Text style={styles.Title101}>臺北小巨蛋</Text>


            <ScrollView>
                <Text style={styles.IntrodTitle}>景點介紹</Text>
                <Text style={styles.Introd101}>臺北小巨蛋座落於松山區敦化北路和南京東路四段交叉口，前身為臺北市立棒球場。2000年底，臺北市政府拆除老舊棒球場，於原址興建15,000席多功能體育館(Arena)。

臺北小巨蛋是臺北市運動設施整體規劃興建計畫中重要的室內場館設施，建築體分為主場館及副館，主場館為一座地下2層、地上5層之鋼骨鋼筋混凝土建築物，總樓層地板面積約90,900平方公尺。主場地內部長76公尺、寬41.5公尺，伸縮式活動座椅完全伸展時，場地仍達60公尺×29.5公尺，場地中央亦可視需要全面結冰，成為標準的室內冰上競賽運動場館。場地使用可依需要彈性多元變化，因此得以爭取辦理國際單項運動總會之一級賽事活動，也是國內外藝文團體競相租用辦理展演的熱門場地。

副館(冰上樂園)常年結冰，為臺灣唯一符合國際標準之室內滑冰場，滑冰場看臺可容納800席位。結冰場地面積為61公尺×30公尺，配置冰上曲棍球、競速滑冰相關器材設施，可舉辦標準室內冰上競技運動，平日開放民眾滑冰運動，並開設各式教學訓練課程。另冰上樂園也歡迎學校社團或公司行號申請團體進場，並可代為安排教學經驗豐富之滑冰教練，引領民眾體驗奔馳滑行樂趣。

此外，臺北小巨蛋場館內規劃約2,000餘坪之附屬商業設施，包含知名連鎖餐飲企業、便利商店、健身中心、親子休閒館、保健用品等各式特色店家進駐，滿足民眾舒適的餐飲購物及娛樂需求。</Text>
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
    },
    starnum: {
        color: "#e3ab53",
        position: 'absolute',
        top: 252,
        left: 125,
    },
});
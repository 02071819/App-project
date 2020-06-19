import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function Park({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/red2.jpg")} style={styles.Imgstyle} />
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

            <Text style={styles.Title101}>西門紅樓</Text>


            <ScrollView>
                <Text style={styles.IntrodTitle}>景點介紹</Text>
                <Text style={styles.Introd101}>西門紅樓於1908年由日本建築師近藤十郎所建造，是台灣第一座官方興建的公營市場，亦是今天全島所保存最古老完整的三級古蹟建築物。其中八角樓的「八卦造型」取其八方雲集之意作為入口、十字樓的「十字架造型」作為主體的特色，另外加上緊鄰兩旁的南北廣場統稱為「西門紅樓」。
內部空間規劃了品茶休憩的「紅樓茶坊」、搜羅台灣風格好物的「紅樓選品」、推動小型文創產業發展的基地與展售空間「16工房」及古樸別緻的專業表演場地「二樓劇場」。另有多元文化體驗活動，除固定館所導覽、創意講談、手作工作坊之外，每個週末還有手作創意市集、劇場演出及於中央展區不定期展覽等活動。
西門紅樓歷經市場、書場、電影院、劇場的角色變換，自2007年起，臺北市政府文化局委由台北市文化基金會營運管理，以文創平台推廣形式，欲達成振興西門町街區發展目標，歷經10餘年經營，已逐步累積文創能量，形塑成現今臺北市甚至是台灣指標性的文創及藝文據點。</Text>
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
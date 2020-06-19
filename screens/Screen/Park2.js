import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53"]
const starColors1 = ["#e3ab53"]

export default function Park({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/pp2.jpg")} style={styles.Imgstyle} />
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

            <Text style={styles.Title101}>松山文創園區</Text>


            <ScrollView>
                <Text style={styles.IntrodTitle}>景點介紹</Text>
                <Text style={styles.Introd101}>松山創意園區，位於臺北市信義區，占地6.6公頃，建於西元1937年，其前身為「臺灣總督府專賣局松山菸草工場」，為臺灣現代化工業廠房的先驅，也是第一座專業的捲菸廠。
建築風格屬「日本初現代主義」，形式簡潔典雅，面磚、琉璃及銅釘做工精細，堪稱當時工廠的楷模。1945年戰後，臺灣省專賣局接收，更名為「臺灣省專賣局松山菸草工廠」，1998年，因都市空間規劃、公賣改制、需求量下降等因素停產，併入臺北菸廠，正式走入歷史。
2001年，臺北市政府將其指定為第99處市定古蹟，園區規劃為：市定古蹟(辦公廳舍、1-5號倉庫、製菸工廠、鍋爐房)、歷史建物(檢查室、機械修理廠、育嬰房)、特色建築(巴洛克花園、生態景觀池、澡堂、多功能展演廳)。近年為活化園區的空間再利用，結合了藝文、文創、設計等展演活動，與台灣創意設計中心合作設置「台灣設計館」，與國內知名琉璃工房結合琉璃藝術推出「小山堂」，並設有輕食餐廳(位於機械修理廠)，將園區提升為設計及文創產業的基地。</Text>
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
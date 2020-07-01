import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput, Linking } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

export default function HotelScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={24} style={styles.AngleStyle} />
                    <Text style={styles.textStyle}>homepage</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/taipei-h-imperial_3/hotel/taipei-tw.html?cid=1647692')}>
                        <View style={styles.cardSectionStyle}>
                            <Image source={require("../../assets/hotel1.jpg")} style={styles.img} />
                            <Text style={styles.hotelHeaderText}>台北亞太帝國</Text>
                            <Text style={styles.hotelText}>台北市忠孝西路一段50號11樓</Text>

                            <Image source={require("../../assets/location.png")} style={styles.loimg} />
                            <View style={styles.rank}>
                                <View style={styles.rank1}>
                                    <Image source={require("../../assets/metropolitan.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>台北市中心</Text>

                                </View>
                                <View style={styles.rank2}>
                                    <Image source={require("../../assets/wifi-connection.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>免費Wi-Fi</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/morwing-hotel-culture-vogue/hotel/taipei-tw.html?cid=1647692')}>
                        <View style={styles.cardSectionStyle}>
                            <Image source={require("../../assets/hotel2.jpg")} style={styles.img} />
                            <Text style={styles.hotelHeaderText}>清翼居采風館</Text>
                            <Text style={styles.hotelText}>台北市南陽街8號5樓</Text>

                            <Image source={require("../../assets/location.png")} style={styles.loimg} />
                            <View style={styles.rank}>
                                <View style={styles.rank1}>
                                    <Image source={require("../../assets/metropolitan.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>台北市中心</Text>

                                </View>
                                <View style={styles.rank2}>
                                    <Image source={require("../../assets/wifi-connection.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>免費Wi-Fi</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/taiwan-youth-hostel-capsule-hotel/hotel/taipei-tw.html?cid=1647692')}>
                        <View style={styles.cardSectionStyle}>
                            <Image source={require("../../assets/hotel3.jpg")} style={styles.img} />
                            <Text style={styles.hotelHeaderText}>台灣青旅膠囊旅店</Text>
                            <Text style={styles.hotelText}>台北市青島西路11號</Text>

                            <Image source={require("../../assets/location.png")} style={styles.loimg} />
                            <View style={styles.rank}>
                                <View style={styles.rank1}>
                                    <Image source={require("../../assets/bread.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>免費早餐</Text>

                                </View>
                                <View style={styles.rank2}>
                                    <Image source={require("../../assets/metropolitan.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>台北市中心</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/flip-flop-hostel-garden_3/hotel/taipei-tw.html?cid=1647692')}>
                        <View style={styles.cardSectionStyle}>
                            <Image source={require("../../assets/hotel4.jpg")} style={styles.img} />
                            <Text style={styles.hotelHeaderText}>夾脚拖的家</Text>
                            <Text style={styles.hotelText}>台北市長安西路122號</Text>

                            <Image source={require("../../assets/location.png")} style={styles.loimg} />
                            <View style={styles.rank}>
                                <View style={styles.rank1}>
                                    <Image source={require("../../assets/bread.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>免費早餐</Text>

                                </View>
                                <View style={styles.rank2}>
                                    <Image source={require("../../assets/wifi-connection.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>免費Wi-Fi</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/moshamanla-main-station/hotel/taipei-tw.html?cid=1647692')}>
                        <View style={styles.cardSectionStyle}>
                            <Image source={require("../../assets/hotel5.jpg")} style={styles.img} />
                            <Text style={styles.hotelHeaderText}>摩莎曼拉精品旅館</Text>
                            <Text style={styles.hotelText}>台北市開封街一段33號</Text>

                            <Image source={require("../../assets/location.png")} style={styles.loimg} />
                            <View style={styles.rank}>
                                <View style={styles.rank1}>
                                    <Image source={require("../../assets/metropolitan.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>台北市中心</Text>

                                </View>
                                <View style={styles.rank2}>
                                    <Image source={require("../../assets/wifi-connection.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>免費Wi-Fi</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.agoda.com/zh-tw/caesar-park-hotel-taipei_6/hotel/taipei-tw.html?cid=1647692')}>
                        <View style={styles.cardSectionStyle}>
                            <Image source={require("../../assets/hotel6.jpg")} style={styles.img} />
                            <Text style={styles.hotelHeaderText}>台北凱撒大飯店</Text>
                            <Text style={styles.hotelText}>台北市忠孝西路一段38號</Text>

                            <Image source={require("../../assets/location.png")} style={styles.loimg} />
                            <View style={styles.rank}>
                                <View style={styles.rank1}>
                                    <Image source={require("../../assets/metropolitan.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>台北市中心</Text>

                                </View>
                                <View style={styles.rank2}>
                                    <Image source={require("../../assets/taxi.png")} style={styles.rankPic} />
                                    <Text style={styles.rankText}>機場接送</Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeaderStyle: {
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        paddingTop: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 2
    },
    cardSectionStyle: {
        //paddingTop:20,
        height: 280,
        backgroundColor: "#FFEBCD",
        margin: 25,
        shadowOpacity: 2,
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 3 }
    },
    img: {
        position: "relative",
        height: 200,
        width: 326,
        borderWidth: 1,
        borderColor: "gray",
        //borderRadius:25,
    },
    hotelHeaderText: {
        color: "#000",
        fontSize: 20,
        position: 'relative',
        top: 8,
        left: 10
        //textAlign: "center",
    },
    hotelText: {
        fontSize: 12,
        left: 33,
        top: 22
    },
    rankPic: {
        left: 1,
        width: 20,
        height: 20,
        top: 2,
    },
    rank: {
        backgroundColor: "#fff",
        width: 110,
        height: 79,
        marginTop: -61,
        marginLeft: 215,
    },
    rank1: {
        left: 10,
        top: 5,
    },
    rank2: {
        left: 10,
        top: 5,
    },
    rankText: {
        left: 27,
        top: -13,
        fontSize: 12,
    },
    loimg: {
        width: 20,
        height: 20,
        marginLeft: 8,
        marginTop: 3,
    },
    AngleStyle: {
        color: colors.text,
        position: 'absolute',
        left: 20,
        top: 2,
    },
    headerStyle: {
        backgroundColor: "#250176",
        justifyContent: "center",
        //alignItems: "center",
        height: 80,
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 2
    },
    textStyle: {
        color: "#fff",
        fontSize: 20,
        top: 0,
        left: 60
    },
});
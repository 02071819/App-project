import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";
import FoodData from "../JSON/FoodAlbum.json";

export default function FoodScreen({ navigation }) {
    const goTofood1 = () => {
        navigation.navigate('mpfood1')
    }
    const goTofood2 = () => {
        navigation.navigate('mpfood2')
    }
    const goTofood3 = () => {
        navigation.navigate('mpfood3')
    }
    const goTofood4 = () => {
        navigation.navigate('mpfood4')
    }
    const goTofood5 = () => {
        navigation.navigate('mpfood5')
    }
    const goTofood6 = () => {
        navigation.navigate('mpfood6')
    }
    const goTofood7 = () => {
        navigation.navigate('mpfood7')
    }

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
                    <TouchableOpacity onPress={goTofood1}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image1 }}
                            />

                            <Text style={styles.foodHeaderText}>馬醬韓國中華料理</Text>
                            <Text style={styles.foodText}>臺北市中山區八德路二段275號</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].gold }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第一名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={goTofood2} style={styles.food2}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image2 }}
                            />

                            <Text style={styles.foodHeaderText}>波記茶點心</Text>
                            <Text style={styles.foodText}>台北市忠孝東路4段248巷27號1樓</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].silver }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第二名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={goTofood3} style={styles.food2}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image3 }}
                            />
                            <Text style={styles.foodHeaderText}>黑岩古早味黑糖剉冰</Text>
                            <Text style={styles.foodText}>臺北市中山區錦州街195號</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].copper }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第三名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={goTofood4} style={styles.food2}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image4 }}
                            />
                            <Text style={styles.foodHeaderText}>萬華海鮮粥舖</Text>
                            <Text style={styles.foodText}>台北市萬華區永福街9號</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].normal }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第四名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={goTofood5} style={styles.food2}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image5 }}
                            />
                            <Text style={styles.foodHeaderText}>食指大丼</Text>
                            <Text style={styles.foodText}>台北市士林區士東路336號</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].normal }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第五名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={goTofood6} style={styles.food2}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image6 }}
                            />
                            <Text style={styles.foodHeaderText}>御村日本廣島燒</Text>
                            <Text style={styles.foodText}>臺北市中山區撫順街12號</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].normal }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第六名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity onPress={goTofood7} style={styles.food2}>
                        <View style={styles.cardSectionStyle}>
                            <Image
                                style={styles.img}
                                source={{ uri: FoodData.Icon[0].image7 }}
                            />
                            <Text style={styles.foodHeaderText}>海天香餃</Text>
                            <Text style={styles.foodText}>臺北市萬華區和平西路三段168號</Text>
                            <View style={styles.rank}>
                                <Image source={{ uri: FoodData.Icon[0].normal }} style={styles.rankPic} />
                                <Text style={styles.rankText}>第七名</Text>
                                <Image source={{ uri: FoodData.Icon[0].location }} style={styles.loimg} />
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
        height: 170,
        backgroundColor: "#FFEBCD",
        margin: 3,
        borderRadius: 10
    },
    img: {
        top: 30,
        position: "relative",
        height: 105,
        width: 105,
        left: 20,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 25,
    },
    foodHeaderText: {
        color: "#000",
        fontSize: 20,
        position: 'relative',
        top: -50,
        left: 150
        //textAlign: "center",
    },
    foodText: {
        fontSize: 12,
        left: 155,
        top: -30
    },
    rankPic: {
        left: 1,
        width: 25,
        height: 25,
        top: 2,
    },
    rank: {
        backgroundColor: "#fff",
        width: 78,
        height: 30,
        left: 150,
        top: -130,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5
    },
    rankText: {
        left: 25,
        top: -19,
        fontSize: 14,
    },
    loimg: {
        width: 20,
        height: 20,
        top: 65
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
    back: {
        top: 30,
        left: 20
    },
    textStyle: {
        color: "#fff",
        fontSize: 20,
        top: 0,
        left: 60
    },
    AngleStyle: {
        color: colors.text,
        position: 'absolute',
        left: 20,
        top: 2,
    },
});

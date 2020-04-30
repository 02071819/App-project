import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";


export default function TravelScreen({ navigation }) {

    const [gallery] = useState([
        {
            image: { uri: "https://mycte.azureedge.net/wp-content/uploads/2019/08/%E5%8F%B0%E5%8C%97101-20141016165159LKHDPKFO.jpg" },
            title: '台北101', key: '1'
        },
        {
            image: { uri: "https://big5.minghui.org/mh/article_images/2019-3-25-taibei-sun-yat-sen-memorial-hall_01.jpg" },
            title: '國父紀念館', key: '2'
        },
        {
            image: { uri: "https://image.cdn-eztravel.com.tw/q5JYqudSlSf78YJ1pexTPFgLkPHVwkcRYEmE20ClkVI/g:ce/aHR0cHM6Ly93d3cuZXp0cmF2ZWwuY29tLnR3L3BvaS90dy9UUEUvQ2hpYW5nIEthaS1zaGVrIE1lbW9yaWFsIEhhbGwvc2h1dHRlcnN0b2NrXzc1NDI2NzgxLmpwZw.jpg" },
            title: '中正紀念堂', key: '3'
        },
        {
            image: { uri: "https://static.accupass.com/userupload/cab95715d65c430b90537ddc9419cb46.jpg" },
            title: '西門町', key: '4'
        },
        {
            image: { uri: "https://storage.googleapis.com/smiletaiwan-cms-cwg-tw/article/201805/article-5afd46951ab21.jpg" },
            title: '故宮博物院', key: '5'
        },
    ])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.TDlist}>
                <View>
                    <Text style={styles.Title}>熱門景點</Text>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ paddingVertical: 20 }}>
                                    <TouchableOpacity>
                                        <Image source={item.image} style={{
                                            width: 150,
                                            marginRight: 14, height: 250, borderRadius: 10
                                        }} />

                                        <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                            style={styles.LocationIcon} />
                                        <Text style={styles.ImageText}>{item.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>

                <View>
                    <Text style={styles.Title2}>歷史建築</Text>
                </View>

            </ScrollView>

            <View style={styles.headerstyle}>
                <Image source={require("../../assets/jiufen-taipei.jpg")} style={styles.HeadImg} />

                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="left" size={24} color={colors.text} />
                </TouchableOpacity>

                <View>
                    <TextInput style={styles.searchBox}
                        placeholder='Search Destination'
                        placeholderTextColor={colors.darkHl}>
                    </TextInput>

                    <TouchableOpacity style={styles.HeadSearch}>
                        <Octicons name="search" size={20} color={colors.darkHl} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
        flexGrow:1,
        height:'100%',
    },
    TDlist: {
        position: 'absolute',
        top: 80,
    },
    headerstyle: {
        backgroundColor: colors.darkBg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        paddingLeft: 8,
        paddingRight: 12,
        elevation: 2,
        position: 'absolute',
    },
    HeadSearch: {
        marginLeft: 270,
        position: 'relative',
        bottom: 28,
        right: 40,
        opacity: 0.6,
    },
    HeadImg: {
        width: 375,
        height: 450,
        position: "absolute",
        borderBottomRightRadius: 65,
    },
    searchBox: {
        position: 'relative',
        right: 32,
        height: 35,
        marginTop: 350,
        paddingRight: 150,
        backgroundColor: colors.text,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    Title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text,
        marginTop: 210,
        marginLeft: 20,
    },
    Title2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.text,
        position: 'absolute',
    },
    LocationIcon: {
        position: "absolute",
        marginTop: 210,
        left: 5,
    },
    ImageText: {
        color: colors.text,
        fontSize: 12,
        position: 'absolute',
        marginTop: 218,
        left: 30,
    },
});

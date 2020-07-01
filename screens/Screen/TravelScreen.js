import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign, Octicons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";
import TravelData from "../JSON/TravelAlbum.json";

export default function TravelScreen({ navigation }) {

    // const [gallery] = useState([
    //     {
    //         image: { uri: "https://mycte.azureedge.net/wp-content/uploads/2019/08/%E5%8F%B0%E5%8C%97101-20141016165159LKHDPKFO.jpg" },
    //         title: '台北101', key: '1'
    //     },
    //     {
    //         image: { uri: "https://big5.minghui.org/mh/article_images/2019-3-25-taibei-sun-yat-sen-memorial-hall_01.jpg" },
    //         title: '國父紀念館', key: '2'
    //     },
    //     {
    //         image: { uri: "https://image.cdn-eztravel.com.tw/O1kPl2lZiMDyyhRc7mH2NXWU5xZUkoqgh_tRYuNlIyI/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L3BvaS90dy9UUEUvQ2hpYW5nIEthaS1zaGVrIE1lbW9yaWFsIEhhbGwvc2h1dHRlcnN0b2NrXzc1NDI2NzgxLmpwZw.jpg" },
    //         title: '中正紀念堂', key: '3'
    //     },
    //     {
    //         image: { uri: "https://static.accupass.com/userupload/cab95715d65c430b90537ddc9419cb46.jpg" },
    //         title: '西門町', key: '4'
    //     },
    //     {
    //         image: { uri: "https://storage.googleapis.com/smiletaiwan-cms-cwg-tw/article/201805/article-5afd46951ab21.jpg" },
    //         title: '故宮博物院', key: '5'
    //     },
    // ])

    const goTo101 = () => {
        navigation.navigate('Taipei101')
    }
    const goToCerem1 = () => {
        navigation.navigate('ceremony1')
    }
    const goToCerem2 = () => {
        navigation.navigate('ceremony2')
    }
    const goToWest = () => {
        navigation.navigate('West')
    }
    const goToMus = () => {
        navigation.navigate('Museum')
    }

    // const [gallery2] = useState([
    //     {
    //         image: { uri: "https://i1.wp.com/img.journey.tw/20190110230202_14.jpg?resize=2000%2C1328&quality=100&ssl=1" },
    //         title: '華山1914文創園區', key: '1'
    //     },
    //     {
    //         image: { uri: "https://meet.eslite.com/Content/Images/Article/1200X628_20190821132819.JPG" },
    //         title: '國立臺灣博物館', key: '2'
    //     },
    //     {
    //         image: { uri: "https://cloud.culture.tw/e_new_upload/task/ec0c4582-6042-444b-9a5a-3afe8cb1b3ff/19970220000003/48614a429a8f5d374605f64dafc8ef98513800c4.jpg" },
    //         title: '西門紅樓', key: '3'
    //     },
    //     {
    //         image: { uri: "https://tnimage.s3.hicloud.net.tw/photos/shares/5b57e8732f2fe.jpg" },
    //         title: '松山文創園區', key: '4'
    //     },
    //     {
    //         image: { uri: "https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_10528_3.jpg" },
    //         title: '臺北小巨蛋', key: '5'
    //     },
    // ])

    const goToPark = () => {
        navigation.navigate('Park')
    }
    const goToTaiwanMus = () => {
        navigation.navigate('TaiwanMus')
    }
    const goToPark2 = () => {
        navigation.navigate('Park2')
    }
    const goToRedBuild = () => {
        navigation.navigate('RedBuild')
    }
    const goToEgg = () => {
        navigation.navigate('Egg')
    }

    // const [gallery3] = useState([
    //     {
    //         image: { uri: "https://www.tsa.gov.tw/tsa/images/psg/e593291ad4c2515a491afef5b0c4f936.png" },
    //         title: '饒河街觀光夜市', key: '1'
    //     },
    //     {
    //         image: { uri: "https://pic.pimg.tw/chu94168/1461709112-2489441005.jpg" },
    //         title: '士林觀光夜市', key: '2'
    //     },
    //     {
    //         image: { uri: "https://www.taiwan10000.com/wp-content/uploads/2017/07/%E8%87%A8%E6%B1%9F%E8%A1%97%E8%A7%80%E5%85%89%E5%A4%9C%E5%B8%82-960x720.jpg" },
    //         title: '臨江街觀光夜市 ', key: '3'
    //     },
    //     {
    //         image: { uri: "https://cdn2.ettoday.net/images/899/899809.jpg" },
    //         title: '寧夏觀光夜市', key: '4'
    //     },
    //     {
    //         image: { uri: "https://www.travel.taipei/image/89569/1024x768" },
    //         title: '遼寧街觀光夜市', key: '5'
    //     },
    // ])
    const goToNM1 = () => {
        navigation.navigate('NM1')
    }
    const goToNM2 = () => {
        navigation.navigate('NM2')
    }
    const goToNM3 = () => {
        navigation.navigate('NM3')
    }
    const goToNM4 = () => {
        navigation.navigate('NM4')
    }
    const goToNM5 = () => {
        navigation.navigate('NM5')
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.TravelList}>
                    <View>
                        <Text style={styles.Title}>熱門景點</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goTo101}>
                                    <Image source={{ uri: TravelData.Image[0].image2 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>台北101</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToCerem1}>
                                    <Image source={{ uri: TravelData.Image[0].image3 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>國父紀念館</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToCerem2}>
                                    <Image source={{ uri: TravelData.Image[0].image4 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>中正紀念堂</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToWest}>
                                    <Image source={{ uri: TravelData.Image[0].image5 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>西門町</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20 }}>
                                <TouchableOpacity onPress={goToMus}>
                                    <Image source={{ uri: TravelData.Image[0].image6 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>故宮博物院</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={gallery}
                            renderItem={({ item }) => {
                                console.log(item)
                                return (
                                    <View style={{ paddingVertical: 20 }}>
                                        <TouchableOpacity onPress={goTo101}>
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
                    </View> */}
                    <View>
                        <Text style={styles.Title2}>藝文館所</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToPark}>
                                    <Image source={{ uri: TravelData.Image[0].image7 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>華山1914文創園區</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToTaiwanMus}>
                                    <Image source={{ uri: TravelData.Image[0].image8 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>國立臺灣博物館</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToRedBuild}>
                                    <Image source={{ uri: TravelData.Image[0].image9 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>西門紅樓</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToPark2}>
                                    <Image source={{ uri: TravelData.Image[0].image10 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>松山文創園區</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 60 }}>
                                <TouchableOpacity onPress={goToEgg}>
                                    <Image source={{ uri: TravelData.Image[0].image11 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>臺北小巨蛋</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={gallery2}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ paddingVertical: 60 }}>
                                        <TouchableOpacity>
                                            <Image source={item.image} style={{
                                                width: 150,
                                                marginRight: 14, height: 250, borderRadius: 10
                                            }} />

                                            <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                                style={styles.LocationIcon1} />
                                            <Text style={styles.ImageText}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View> */}

                    <View>
                        <Text style={styles.Title3}>夜市商圈</Text>
                    </View>

                    <ScrollView horizontal={true}>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM1}>
                                    <Image source={{ uri: TravelData.Image[0].image12 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>信義商圈</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM2}>
                                    <Image source={{ uri: TravelData.Image[0].image13 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>饒河街觀光夜市</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM3}>
                                    <Image source={{ uri: TravelData.Image[0].image14 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>東區商圈</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM4}>
                                    <Image source={{ uri: TravelData.Image[0].image15 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>公館商圈</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ paddingVertical: 20, paddingTop: 45 }}>
                                <TouchableOpacity onPress={goToNM5}>
                                    <Image source={{ uri: TravelData.Image[0].image16 }} style={{
                                        width: 150,
                                        marginRight: 14, height: 250, borderRadius: 10
                                    }} />

                                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                        style={styles.LocationIcon} />
                                    <Text style={styles.ImageText}>士林觀光夜市</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            data={gallery3}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ paddingVertical: 60 }}>
                                        <TouchableOpacity>
                                            <Image source={item.image} style={{
                                                width: 150,
                                                marginRight: 14, height: 250, borderRadius: 10
                                            }} />

                                            <MaterialCommunityIcons name="map-marker" size={24} color={colors.text}
                                                style={styles.LocationIcon2} />
                                            <Text style={styles.ImageText}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View> */}

                </View>
            </ScrollView>

            <View style={styles.headerstyle}>
                <Image source={{ uri: TravelData.Image[0].image1 }} style={styles.HeadImg} />

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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.text,
    },
    TravelList: {
        marginTop: 80,
    },
    headerstyle: {
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
        bottom: 30,
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
        height: 43,
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
        color: colors.darkBg,
        marginTop: 210,
        marginLeft: 20,
    },
    Title2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.darkBg,
        position: 'absolute',
        marginLeft: 20,
        marginTop: 10,
    },
    Title3: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.darkBg,
        position: 'absolute',
        marginLeft: 20,
    },
    LocationIcon: {
        position: "absolute",
        marginTop: 210,
        left: 5,
    },
    LocationIcon1: {
        position: "absolute",
        marginTop: 210,
        left: 5,
    },
    LocationIcon2: {
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
        fontWeight:"600",
    },
});
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { gs, colors } from "../../styles";
import { AntDesign } from "@expo/vector-icons";

export default function mp101({ navigation }) {
    const [marker] = useState({
        coord: {
            longitude: 121.548492,
            latitude: 25.102355,
        },
        name: "國立故宮博物院",
        address: "111台北市士林區至善路二段221號",
    });

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider='google'
                region={{
                    longitude: 121.548492,
                    latitude: 25.102355,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.02,
                }}>
                <Marker
                    coordinate={marker.coord}
                    title={marker.name}
                    description={marker.address}
                />
            </MapView>

            <TouchableOpacity onPress={() => navigation.navigate('Museum')}>
                <AntDesign name="left" size={24} style={styles.AngleStyle} />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.text,
        flex: 1,
    },
    map: {
        flex: 1,
    },
    AngleStyle: {
        color: colors.darkBg,
        position: 'absolute',
        bottom: 530,
        left: 25,
    },
});
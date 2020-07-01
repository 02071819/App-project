import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { gs, colors } from "../../styles";
import { AntDesign } from "@expo/vector-icons";

export default function mp101({ navigation }) {
    const [marker] = useState({
        coord: {
            longitude: 121.549848,
            latitude: 25.051109,
        },
        name: "台北小巨蛋",
        address: "105台北市松山區南京東路四段2號",
    });
    
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider='google'
                region={{
                    longitude: 121.549848,
                    latitude: 25.051109,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.02,
                }}>
                <Marker
                    coordinate={marker.coord}
                    title={marker.name}
                    description={marker.address}
                />
            </MapView>

            <TouchableOpacity onPress={() => navigation.navigate('Egg')}>
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
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { gs, colors } from "../../styles";

export default function Amenities2() {
    return (
        <View style={gs.sectionContainer}>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer4}>
                    <TouchableOpacity style={styles.amentity}>
                        <FontAwesome5 name="bus" size={24} color={colors.lighth1} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>交通</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer5}>
                    <TouchableOpacity style={styles.amentity}>
                        <MaterialCommunityIcons name="weather-sunny" size={28} color={colors.lighth1} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>天氣</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer6}>
                    <TouchableOpacity style={styles.amentity}>
                        <Ionicons name="ios-school" size={26} color={colors.lighth1} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>教育</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    amentitiesContainer: {
        marginTop: 1,
    },
    amentityContainer4: {
        alignItems: "center",
        width: 95,
        top: 10,
        right: 15,
    },
    amentityContainer5: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 105,
        top: -60,
    },
    amentityContainer6: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 230,
        top: -61,
    },
    amentity: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        ...gs.center,
        backgroundColor: "#444",
    },
    amenityName: {
        color: colors.lighth1,
        fontSize: 13,
        fontWeight: "600",
        marginTop: 6,
        textAlign: "center",
    }
})
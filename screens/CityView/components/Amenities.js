import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, Ionicons, FontAwesome, Entypo, } from "@expo/vector-icons";
import { gs, colors } from "../../../styles";

export default function Amenities() {
    return (
        <View style={gs.sectionContainer}>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer1}>
                    <TouchableOpacity style={styles.amentity}>
                        <Entypo name="camera" size={24} color={colors.lighth1} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>觀光</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer2}>
                    <TouchableOpacity style={styles.amentity}>
                        <Ionicons name="md-restaurant" size={26} color={colors.lighth1} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>美食</Text>
                </View>
            </View>

            <View style={styles.amentitiesContainer}>
                <View style={styles.amentityContainer3}>
                    <TouchableOpacity style={styles.amentity}>
                        <FontAwesome name="hotel" size={24} color={colors.lighth1} />
                    </TouchableOpacity>
                    <Text style={styles.amenityName}>住宿</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    amentitiesContainer: {
        marginTop: 25,
    },

    amentityContainer1: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        right: 230,
        top: -20,
    },
    amentityContainer2: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 105,
        top: -45,
    },
    amentityContainer3: {
        alignItems: "center",
        width: 95,
        position: 'absolute',
        left: 230,
        top: -70,
    },
    amentity: {
        width: 50,
        height: 50,
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
});
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TravelScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerstyle}>
                <TouchableOpacity onPress={navigation.navigate('Home')}>
                    <Image source={require("../../assets/Angle.png")} />
                </TouchableOpacity>
                <Text>0</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerstyle: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        paddingLeft: 8,
        paddingRight: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
});

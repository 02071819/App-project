import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from "../../../styles";
import CityView from '../index';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <CityView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg,
    },
});

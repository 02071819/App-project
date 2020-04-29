import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { colors } from '../../styles';
import Header from "./components/Header";
import Amenities from "./components/Amenities";
import Amenities2 from "./components/Amenities2";
import Footer from "./components/Footer";


export default function index() {
    return (
        <View style={styles.container}>
            <StatusBar barstyle="light-content" />
            <Header />

            <ScrollView>
                <Amenities />
                <Amenities2 />
            </ScrollView>

            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    }
});
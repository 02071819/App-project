import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { colors } from '../../styles';

const Recents = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>使用者帳戶</Text>
            </View>

            <View style={styles.cardContainerStyle}>
                <TouchableOpacity>

                    <View style={styles.cardSectionStyle}>
                        <Text style={styles.ButtonText}>我的最愛! My Favorite</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainerStyle}>
                <TouchableOpacity>
                    <View style={styles.cardSectionStyle}>

                        <Text style={styles.ButtonText}>關於 About</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainerStyle}>
                <TouchableOpacity>
                    <View style={styles.cardSectionStyle}>

                        <Text style={styles.ButtonText}>好評 Star</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainerStyle}>
                <TouchableOpacity>
                    <View style={styles.cardSectionStyle}>

                        <Text style={styles.ButtonText}>登出 Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBg,
    },
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10
    },
    cardContainerStyle: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    cardSectionStyle: {
        padding: 10,
        backgroundColor: "#444",
        borderColor: "#ddd",
        borderBottomWidth: 1
    },
    headerStyle: {
        backgroundColor: "#444",
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
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        top: -5,
        fontSize: 30,
        color: "#fff",
    },

    ButtonText: {
        color: "#fff",
        fontSize: 28,
    },


});

export default Recents;
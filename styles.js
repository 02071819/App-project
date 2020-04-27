import { StyleSheet } from "react-native";

export const colors = {
    darkBg: "#222",
    lightBg: "#333",
    darkHl: "#666",
    lighth1: "#888",
    pink: "#ea3372",
    text: "#fff",
    textSec: "#aaa",
};

export const gs = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.lightBg,
    },
    sectionTitle: {
        fontWeight: "700",
        color: colors.text,
        fontSize: 15,
    },
    rowCenter: {
        flexDirection: "row",
        alignItems: "center",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: colors.text,
        fontSize: 20,
    },
    divider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24,
    },
})
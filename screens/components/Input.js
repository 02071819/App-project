import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Platform } from "react-native";
import { colors } from '../../styles';
import { Input } from "react-native-elements";


const NewInput = (props) => {
    if (Platform.OS === 'ios') {
        return (
            <Input
                {...props}
                autoCorrect={false}
                style={props.style}
            />
        );
    }
    return (
        <View style={styles.containerStyle}>
            <TextInput
                {...props}
                autoCorrect={false}
                style={props.style}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        borerBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
};
export default NewInput;




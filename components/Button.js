import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeDarkWithOpacity, themeLight, themeYellowWithOpacity } from '../data/themeColors'
import { fontStyler } from '../helper/fontHelper'
const Button = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                ...styles.frame,
                backgroundColor: props?.color || themeDarkWithOpacity(0.9),
                marginBottom: props?.mb,
                marginTop: props.mt,
                ...props.style
            }}>
            <Text style={fontStyler(600, 16, 18, props.textColor)}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    frame: {
        width: '100%',
        borderRadius: 12,
        padding: 1,
        height: 59,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
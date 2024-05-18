import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themeBlue, themeGreen, themeRed } from '../data/themeColors'
import { WarningCircle, CheckCircle } from 'phosphor-react-native'
import { fullWidth,shadow } from '../data/staticDatas'
import { fontStyler } from '../helper/fontHelper'
const toasterColorMap = {
    "success": themeGreen,
    "error": themeRed
}
const iconProps = {
    size: 24,
    color: 'white',
    weight: 'bold'
}
const iconMap = {
    "success": <CheckCircle {...iconProps} />,
    "error": <WarningCircle {...iconProps} />
}
const CustomToaster = (props) => {

    return (
        <View style={styles.container}>
            <View style={{
                ...styles.frame,
            }}>
                <View style={{
                    ...styles.leftArea,
                    backgroundColor: toasterColorMap[props.type]
                }}>
                    {iconMap[props.type]}
                </View>
                <Text style={{
                    ...fontStyler(400, 14, 19.12),
                    maxWidth: fullWidth - 32 - 60 - 24,
                    marginLeft: 12
                }}>
                    {props.text2}
                </Text>
            </View>
        </View >
    )
}

export default CustomToaster

const styles = StyleSheet.create({
    leftArea: {
        height: '100%',
        aspectRatio: 1,
        backgroundColor: themeBlue,
        borderRadius: 20,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        zIndex: -1,
        flex: 1,
        width: fullWidth - 32,
        height: '100%',
    },
    container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    frame: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: 'white',
        height: 60,
        ...shadow,
        shadowOpacity: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
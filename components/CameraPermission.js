import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from './Container'
import { fullWidth } from '../data/staticDatas';
import { Camera } from 'phosphor-react-native';
import { themeDark, themeLight, themeYellow } from '../data/themeColors';
import { fontStyler } from '../helper/fontHelper';
import Button from './Button';
const CameraPermission = ({ requestPermission }) => {
    return (
        <Container>
            <View style={styles.frame}>
                <Camera
                    color={themeYellow}
                    size={72} />
                <Text
                    style={{
                        ...fontStyler(700, 18, 20, themeLight),
                        textAlign: 'center',
                        maxWidth: '75%',
                        marginTop: 12
                    }}>
                    {"We need your permission\nto show the camera"}
                </Text>
                <Text style={{
                    ...fontStyler(400, 10, 12, themeLight),
                    maxWidth: '75%',
                    marginTop: 8,
                    textAlign: 'center'
                }}>
                    {"(If the button doesn't work,\nyou need to manually enable\nthe camera permission.)"}
                </Text>
            </View>
            <Button
                onPress={() => requestPermission()}
                textColor={themeLight}
                text={"Grant Permission"}
                bg={themeDark}
            />
        </Container>
    )
}

export default CameraPermission

const styles = StyleSheet.create({
    lottieView: {
        width: fullWidth,
        aspectRatio: 1
    },
    frame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
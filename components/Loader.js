import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { fullHeight, fullWidth, statusBarHeight } from '../data/staticDatas'
import animationJson from '../assets/aniamtions/loading.json';
import LottieView from 'lottie-react-native';
import { fontStyler } from '../helper/fontHelper';
import { themeLight } from '../data/themeColors';
import { BlurView } from 'expo-blur';

const Loader = (props) => {
    const animation = useRef(null);

    return (
        <View style={styles.frame}>
            <BlurView
                tint={props.tint || 'dark'}
                intensity={props.intensity || 100}
                style={{
                    ...styles.blurContainer,
                    ...props.style
                }} />
            <LottieView
                autoPlay
                ref={animation}
                style={styles.lottieView}
                source={animationJson}
            />
            {props.text &&
                <Text style={{
                    ...fontStyler(700, 18, 20, themeLight),
                    textAlign: 'center',
                    maxWidth: '80%',
                    marginTop: 16
                }}>
                    {props.text}
                </Text>}
        </View >
    )
}

export default Loader

const styles = StyleSheet.create({
    lottieView: {
        height: 200,
        width: 200
    },
    frame: {
        height: fullHeight,
        width: fullWidth,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 99,
        top: -statusBarHeight
    },
    blurContainer: {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})
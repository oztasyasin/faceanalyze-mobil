import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { backgroundImage, fullHeight, fullWidth, isIos } from '../data/staticDatas'
import { BlurView } from 'expo-blur'

const Container = (props) => {
    return (
        <SafeAreaView style={{
            ...styles.frame
        }}>
            <Image
                placeholder={"|kMsV4oc${j@WDWXj@WXaz~3R-NKazWXocoKocfQNKs,WDj@s,WEWEazj@j@WEocazjtoJj@fQazj@j@j@fQR-azj@j@oKWEazazj@s,azj@azWWodj@j@azazj@azj@j@odazazfQazaza|azj@j@j@azj@ocj@j@j@az"}
                style={styles.backgroundImage}
                source={backgroundImage} />
            {
                !props?.noblur &&
                <BlurView
                    tint={props.tint || 'dark'}
                    intensity={props.intensity || 100}
                    style={{
                        ...styles.blurContainer,
                        ...props.style
                    }} />
            }

            <View style={{
                width: '100%',
                height: '100%',
                paddingHorizontal: 16
            }}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

export default Container

const styles = StyleSheet.create({
    frame: {
        ...StyleSheet.absoluteFill,
        paddingVertical: 32,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -2,
        height: fullHeight + 30,
        width: fullWidth + 100
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
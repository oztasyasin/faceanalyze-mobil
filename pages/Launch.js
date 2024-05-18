import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { User } from 'phosphor-react-native'
import { baseIconProps } from '../data/staticDatas'
import { themeBlue, themeDark, themeLight } from '../data/themeColors'
import Button from '../components/Button'
import { fontStyler } from '../helper/fontHelper'

const Launch = ({ navigation }) => {
    return (
        <Container
            noblur
        >
            <View style={styles.frame}>
                <Text style={{
                    ...fontStyler(700, 62, 55, themeDark, -3),
                    marginTop: 16,
                    paddingTop: 5
                }}>
                    {"Reveal\nYour True\nSelf with a\nSingle\nPhoto"}
                </Text>
            </View>
            <Button
                onPress={() => navigation.navigate('/home')}
                textColor={themeLight}
                text={"Get Started"}
                bg={themeDark}
            />
        </Container>
    )
}

export default Launch

const styles = StyleSheet.create({
    frame: {
        flex: 1,
    }
})
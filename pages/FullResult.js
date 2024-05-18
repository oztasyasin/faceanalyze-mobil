import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import { fontStyler } from '../helper/fontHelper';
import { themeDark, themeLight, themeLightWithOpacity } from '../data/themeColors';
import { fullWidth } from '../data/staticDatas';
import Button from '../components/Button';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LibPages from './LibPages';
import { CardStyleInterpolators } from '@react-navigation/stack';
import ResultTabs from '../components/ResultTabs';
const ResultStack = createMaterialTopTabNavigator();

const FullResult = ({ route, navigation }) => {

    const { data, image } = route?.params;

    return (
        <Container>
            <View style={styles.topFrame}>
                <Image
                    style={styles.image}
                    source={image} />
                <Text style={fontStyler(700, 22, 26, themeLight)}>
                    Results
                </Text>
            </View>
            <ResultStack.Navigator
                tabBar={props => <ResultTabs {...props} />}
                initialRouteName="opencv"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerMode: "none",
                }}
            >
                {
                    Object.keys(data)?.map((item, i) => {
                        return (
                            <ResultStack.Screen
                                key={i}
                                name={item}
                                initialParams={{ data: Array.isArray(data[item]) ? data[item][0] : data[item] }}
                                component={LibPages} />
                        )
                    })
                }
            </ResultStack.Navigator>
        </Container>
    )
}

export default FullResult

const styles = StyleSheet.create({
    topFrame: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24
    },
    scroll: {
        width: fullWidth,
        left: -16,
        paddingHorizontal: 16
    },
    row: {
        marginVertical: 6,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 12,
        borderBottomWidth: 1,
        paddingHorizontal: 16,
        borderColor: themeLightWithOpacity(0.2)
    },
    frame: {
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 12,
        marginRight: 24
    }
})
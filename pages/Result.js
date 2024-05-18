import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../components/Container';
import { fontStyler } from '../helper/fontHelper';
import { themeDark, themeLight, themeLightWithOpacity } from '../data/themeColors';
import { fullWidth } from '../data/staticDatas';
import Button from '../components/Button';
import { PieChart } from 'react-native-chart-kit';
const colors1 = [
    "#F4CE14",
    "#213555",
    "#61677A",
    "#D71313",
    "#8F43EE",
    "#A37EBA",
    "#F73859"
]
const colors2 = [
    "#CDE8E5",
    "#C5FF95",
    "#891652",
    "#87A922",
    "#E1AFD1",
    "#FF407D",
]
const prepData = (data, colors) => {
    const keys = Object.keys(data);
    let arr = [];
    for (let i = 0; i < keys?.length; i++) {
        arr.push({
            name: keys[i],
            value: Number(data[keys[i]]?.toFixed(2)),
            color: colors[i],
            legendFontColor: "#7F7F7F",
            legendFontSize: 10
        })
    }
    return arr;
}
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};
const Result = ({ route, navigation }) => {
    
    const { data } = route?.params;

    const emotionData = prepData(data?.emotion, colors1);
    const raceData = prepData(data?.race, colors2);

    return (
        <Container>
            <ScrollView style={styles.scroll}>
                <View style={styles.frame}>
                    <Image
                        style={styles.image}
                        source={data?.image} />
                    <Text style={{
                        ...fontStyler(600, 28, 38, themeLight),
                        marginVertical: 20,
                    }}>
                        Results
                    </Text>
                    <View style={styles.row}>
                        <Text style={fontStyler(500, 16, 18, themeLight)}>
                            Age:
                        </Text>
                        <Text style={fontStyler(600, 18, 20, themeLight)}>
                            {data?.age}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={fontStyler(500, 16, 18, themeLight)}>
                            Gender:
                        </Text>
                        <Text style={fontStyler(600, 18, 20, themeLight)}>
                            {data?.dominant_gender.toUpperCase()}{"  (%" + data?.gender[data?.dominant_gender].toFixed(0) + ")"}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={fontStyler(500, 16, 18, themeLight)}>
                            Face confidence:
                        </Text>
                        <Text style={fontStyler(600, 18, 20, themeLight)}>
                            %{data?.face_confidence.toString().split('.')[1]}
                        </Text>
                    </View>
                    <View style={{
                        ...styles.row,
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            ...styles.row,
                            borderBottomWidth: 0,
                            paddingHorizontal: 0
                        }}>
                            <Text style={fontStyler(500, 16, 18, themeLight)}>
                                Emotion:
                            </Text>
                            <Text style={fontStyler(600, 18, 20, themeLight)}>
                                {data?.dominant_emotion.toUpperCase()}{"  (%" + data?.emotion[data?.dominant_emotion].toFixed(2) + ")"}
                            </Text>
                        </View>

                        <PieChart
                            data={emotionData}
                            width={fullWidth - 32}
                            height={(fullWidth - 32) * 0.5}
                            chartConfig={chartConfig}
                            accessor={"value"}
                            backgroundColor={"transparent"}
                            paddingLeft={"16"}
                            center={[10, 5]}
                            absolute
                        />
                    </View>
                    <View style={{
                        ...styles.row,
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            ...styles.row,
                            borderBottomWidth: 0,
                            paddingHorizontal: 0
                        }}>
                            <Text style={fontStyler(500, 16, 18, themeLight)}>
                                Race:
                            </Text>
                            <Text style={fontStyler(600, 18, 20, themeLight)}>
                                {data?.dominant_race.toUpperCase()}{"  (%" + data?.race[data?.dominant_race].toFixed(2) + ")"}
                            </Text>
                        </View>

                        <PieChart
                            data={raceData}
                            width={fullWidth - 32}
                            height={(fullWidth - 32) * 0.5}
                            chartConfig={chartConfig}
                            accessor={"value"}
                            backgroundColor={"transparent"}
                            paddingLeft={"16"}
                            center={[10, 5]}
                            absolute
                        />
                    </View>
                </View>
            </ScrollView>
            <Button
                style={{
                    marginTop: 24,
                }}
                onPress={() => navigation.goBack()}
                textColor={themeLight}
                text={"Try Again"}
                bg={themeDark}
            />
        </Container>
    )
}

export default Result

const styles = StyleSheet.create({
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
        width: fullWidth - 32,
        height: fullWidth - 32,
        borderRadius: 12,
        marginTop: 24,
    }
})
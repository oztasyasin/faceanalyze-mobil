import { Dimensions } from "react-native";

export const fontStyler = (weight, size, lineHeight, color = 'black', letterSpacing) => {
    return {
        fontWeight: weight?.toString(),
        fontSize: size,
        lineHeight: lineHeight,
        color: color,
        letterSpacing: letterSpacing
    }
}

const FIGMA_SCREEN_WIDTH = 390;
const screenWidth = Dimensions.get('window').width;

export const getOptimizedFontsize = (figmaFontsize) => {
    return (screenWidth * figmaFontsize) / FIGMA_SCREEN_WIDTH;
}
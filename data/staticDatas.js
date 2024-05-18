import Constants from "expo-constants";
import { Dimensions, Platform } from "react-native";
import { themeDark, themeLight } from "./themeColors";


export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
export const statusBarHeight = Constants.statusBarHeight;
const visibleScreenHeight = fullHeight - statusBarHeight;
const virtualNavigationBarHeight = fullHeight - visibleScreenHeight;
export const bottomHeight = virtualNavigationBarHeight;
export const isIos = Platform.OS === 'ios';
export const isAndroid = !isIos;
export const headerHeight = 50;

export const baseIconProps = {
    size: 20,
    weight: 'bold',
    color: themeLight,
}

export const toasterTexts = {
    success: "Task finished succesfully.",
    failed: "Something went wrong!",
}

export const borderRedButtonStyle = {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: 'white',
}

export const shadow = {
    backgroundColor: 'white',
    shadowColor: '#121212',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
}

export const backgroundImage = "https://raw.githubusercontent.com/oztasyasin/walmateImages/main/face1.png";

export const baseUrl = "http://192.168.1.35:5001";
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { GetResultsWithAllLibraries, SendImage } from '../crud/crud';
import { renderToast } from './toasterHelper';
import { fullWidth } from '../data/staticDatas';

const formatImage = async (uri) => {
    try {
        const manipResult = await ImageManipulator.manipulateAsync(
            uri,
            [{ resize: { width: 1080, height: 1080 } }],
        );
        return manipResult
    } catch (error) {
        return null
    }
}

export const imageToBase64 = async (uri) => {
    try {
        const formatedImage = await formatImage(uri);
        const base64Photo = await FileSystem.readAsStringAsync(formatedImage?.uri, {
            encoding: FileSystem.EncodingType.Base64,
        });
        return base64Photo
    } catch (error) {
        null
    }

}

export const flipImage = async (photo) => {
    try {
        const manipResult = await ImageManipulator.manipulateAsync(
            photo.uri,
            [{ flip: ImageManipulator.FlipType.Horizontal }],
            { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        );
        return manipResult
    } catch (error) {
        return null
    }
}

export const capture = async (facing, ref, setImage, startLoader, stopLoader) => {
    try {
        startLoader();
        const photo = await ref.current.takePictureAsync();
        if (facing === 'back') {
            setImage(() => {
                return photo;
            })
        }
        else {
            const manipResult = await flipImage(photo);
            setImage(() => {
                return manipResult;
            })
        }
        stopLoader();
        return null
    } catch (error) {
        return false
    }
}

export const pickImage = async (setImage) => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0]);
            return null
        }
        return false
    } catch (error) {
        return false
    }
}

export const PostImage = async (image, navigation, reset, startLoader, stopLoader) => {
    startLoader();
    const base64Image = await imageToBase64(image?.uri);
    SendImage(base64Image)
        .then((res) => {
            navigation.navigate("/result", {
                data: {
                    ...res?.data[0],
                    image: image
                }
            })
            stopLoader();
            reset();
        }).catch((err) => {
            stopLoader();
            renderToast({ type: "error", text1: "Login Error", text2: err?.response?.data?.error })
        })
}

export const TestWithAllLibraries = async (image, navigation, reset, startLoader, stopLoader) => {
    startLoader();
    const base64Image = await imageToBase64(image?.uri);
    GetResultsWithAllLibraries(base64Image)
        .then((res) => {
            navigation.navigate("/fullResults", {
                data: res?.data,
                image: image
            })
            stopLoader();
            reset();
        }).catch((err) => {
            stopLoader();
            renderToast({ type: "error", text1: "Login Error", text2: err?.response?.data?.error })
        })
}
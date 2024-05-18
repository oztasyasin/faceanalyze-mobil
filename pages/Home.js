import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Container from '../components/Container'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { CaretLeft, Lightning, LightningA, LightningSlash, X } from 'phosphor-react-native';
import { baseIconProps, fullHeight, fullWidth, isIos, statusBarHeight } from '../data/staticDatas';
import Loader from '../components/Loader';
import { PostImage, TestWithAllLibraries, capture, pickImage } from '../helper/imageHelper';
import CameraPermission from '../components/CameraPermission';
import CameraBottom from '../components/CameraBottom';
import { themeYellow } from '../data/themeColors';
const flashMap = {
    "off": {
        mode: "on",
        icon: <LightningSlash {...baseIconProps} size={24} />
    },
    "on": {
        mode: "auto",
        icon: <Lightning {...baseIconProps} color={themeYellow} size={24} />
    },
    "auto": {
        mode: "off",
        icon: <LightningA {...baseIconProps} color={themeYellow} size={24} />
    },
}
const Home = ({ navigation }) => {

    const ref = useRef();
    const [loader, setLoader] = useState(false);
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState(null);
    const [flash, setFlash] = useState('off');

    const flashTrigger = () => setFlash((current) => { return flashMap[current].mode });
    const goBack = () => navigation.goBack();
    const openImagePicker = async () => pickImage(setImage);
    const captureImage = async () => capture(facing, ref, setImage, startLoader, stopLoader);
    const reset = () => setImage(null);
    const startLoader = () => setLoader(true);
    const stopLoader = () => setLoader(false);
    const toggleCameraFacing = () => setFacing(current => (current === 'back' ? 'front' : 'back'));
    const postImage = async () => PostImage(image, navigation, reset, startLoader, stopLoader);
    const allLibraries = async () => TestWithAllLibraries(image, navigation, reset, startLoader, stopLoader);
    return (
        <Container>
            {
                !permission ? <View /> :
                    !permission.granted ? <CameraPermission requestPermission={requestPermission} /> :
                        <View style={styles.container}>
                            <View style={styles.cameraTop}>
                                <TouchableOpacity onPress={goBack}>
                                    <X {...baseIconProps} size={24} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={flashTrigger}>
                                    {flashMap[flash].icon}
                                </TouchableOpacity>
                            </View>
                            {
                                !image ?
                                    <CameraView
                                        flash={flash}
                                        ref={ref}
                                        style={styles.camera}
                                        facing={facing} /> :
                                    <Image
                                        source={image}
                                        style={styles.camera}
                                    />
                            }
                            <CameraBottom
                                styles={styles}
                                image={image}
                                allLibraries={allLibraries}
                                captureImage={captureImage}
                                openImagePicker={openImagePicker}
                                toggleCameraFacing={toggleCameraFacing}
                                reset={reset}
                                postImage={postImage}
                            />
                        </View>
            }
            {loader && <Loader text={"Please wait..."} />}
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    cameraBottomInsideFrame: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        height: 65,
        alignItems: 'center'
    },
    cameraTop: {
        marginTop: statusBarHeight + 16,
        marginBottom: 72,
        paddingHorizontal: 32,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',

    },
    cameraBottom: {
        flex: 1,
        paddingTop: 32,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingBottom: 44,
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        minHeight: fullHeight,
        marginTop: isIos ? -statusBarHeight : -statusBarHeight - 16,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    camera: {
        aspectRatio: 1,
        width: fullWidth,
        height: fullWidth,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
})
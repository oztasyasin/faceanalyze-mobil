import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Aperture, CameraRotate, Check, Images, X } from 'phosphor-react-native'
import { baseIconProps } from '../data/staticDatas'
import Button from './Button'
import { themeDark, themeLight } from '../data/themeColors'

const CameraBottom = ({ styles, image, captureImage, openImagePicker, toggleCameraFacing, reset, postImage, allLibraries }) => {
    return (
        <View style={styles.cameraBottom}>
            <View style={{
                ...styles.cameraBottomInsideFrame,
                ...image && { flexDirection: 'column' }
            }}>
                {
                    !image ?
                        <>
                            <TouchableOpacity onPress={openImagePicker}>
                                <Images {...baseIconProps} size={32} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={captureImage}>
                                <Aperture {...baseIconProps} weight='duotone' size={64} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleCameraFacing} >
                                <CameraRotate {...baseIconProps} size={32} />
                            </TouchableOpacity>
                        </> :
                        <>
                            <Button
                                onPress={postImage}
                                textColor={themeDark}
                                text={"Get results"}
                                color={themeLight}
                            />
                            <Button
                                mt={12}
                                onPress={allLibraries}
                                textColor={themeLight}
                                text={"Test with all libraries"}
                                color={themeDark}
                            />
                        </>
                }
            </View>
        </View>
    )
}

export default CameraBottom
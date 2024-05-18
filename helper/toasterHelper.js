import Toast from 'react-native-toast-message';

const defaultProps = {
    type: "success",
    text1: null,
    text2: null
}
export const renderToast = (props) => {
    const newProps = {
        ...defaultProps,
        ...props
    }
    Toast.show({
        type: newProps.type,
        text1: newProps.text1,
        text2: newProps.text2
    });
}
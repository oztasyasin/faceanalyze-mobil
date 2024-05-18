import { Animated, View, TouchableOpacity } from 'react-native';
import { statusBarHeight } from '../data/staticDatas';
import { themeLight } from '../data/themeColors';

export default function ResultTabs({ state, descriptors, navigation, position }) {
    return (
        <View style={{
            flexDirection: 'row',
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                const inputRange = state.routes.map((_, i) => i);
                const opacity = position.interpolate({
                    inputRange,
                    outputRange: inputRange.map(i => (i === index ? 1 : 0.5)),
                });

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Animated.Text style={{
                            opacity,
                            fontSize: 8,
                            letterSpacing: -1,
                            color: themeLight,
                            paddingVertical: 12,
                            borderRightWidth: 1,
                        }}>
                            {label}
                        </Animated.Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
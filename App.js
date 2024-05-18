import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import CustomToaster from './components/CustomToaster'
import Launch from './pages/Launch'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Home from './pages/Home'
import Result from './pages/Result'
import { StatusBar } from 'expo-status-bar';
import FullResult from './pages/FullResult'
const Stack = createStackNavigator();

const toastConfig = {
    success: (props) => <CustomToaster {...props} type={"success"} />,
    error: (props) => <CustomToaster {...props} type={"error"} />,
}
const App = () => {
    return (
        <SafeAreaProvider>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerMode: 'none',
                    }}
                >
                    <Stack.Screen name='/launch' component={Launch} />
                    <Stack.Screen name='/home' component={Home} />
                    <Stack.Screen name='/result' component={Result} />
                    <Stack.Screen name='/fullResults' component={FullResult} />
                </Stack.Navigator>
            </NavigationContainer>
            <Toast
                config={toastConfig}
                position='bottom' />
        </SafeAreaProvider >
    )
}
export default App
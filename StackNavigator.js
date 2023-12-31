import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WorkOutScreen from './screens/WorkOutScreen';
import FitScreen from './screens/FitScreen';
import RestScreen from './screens/RestScreen';
import ZoomView from './screens/ZoomView';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Workout" component={WorkOutScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Zoom" component={ZoomView} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})
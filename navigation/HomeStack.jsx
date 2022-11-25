import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import WeatherScreen from '../screens/WeatherScreen';
import theme from '../themes/default';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            defaultScreen="HomeScreen"
            screenOptions={{
                headerStyle: { backgroundColor: theme.colors.primary1 },
                headerTintColor: theme.colors.white,
                headerTitleStyle: {
                    fontWeight: theme.colors.poppins400,
                },
            }
            }
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, title: 'Accueil' }} />
            <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{ title: 'Météo' }} />
        </Stack.Navigator >
    );
}
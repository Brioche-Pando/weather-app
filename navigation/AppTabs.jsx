import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import CreditScreen from '../screens/CreditScreen';
import theme from '../themes/default';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.gray1,
                tabBarStyle: {
                    backgroundColor: theme.colors.primary0
                }
            }}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={
                {
                    title: 'Accueil',
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialIcons name="home" size={22} color={theme.colors.gray1} />
                    ),
                }} />
            <Tab.Screen name="CreditScreen" component={CreditScreen} options={
                {
                    title: 'Crédit',
                    tabBarIcon: () => (
                        <MaterialIcons name="info" size={22} color={theme.colors.gray1} />
                    ),
                }} />
        </Tab.Navigator>
    );
}
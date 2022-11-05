import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from "@expo/vector-icons";
import HomeStack from '../navigation/HomeStack'
import CreditScreen from '../screens/CreditScreen'

const Tab = createBottomTabNavigator()

export default function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#cacbcf',
                tabBarStyle: {
                    backgroundColor: '#121521'
                }
            }}>
            <Tab.Screen name="Accueil" component={HomeStack} options={{
                headerShown: false,
                tabBarIcon: () => (
                    <MaterialIcons name="home" size={22} color={'#cacbcf'} />
                ),
            }} />
            <Tab.Screen name="Crédit" component={CreditScreen} options={{
                tabBarIcon: () => (
                    <MaterialIcons name="info" size={22} color={'#cacbcf'} />
                ),
            }} />
        </Tab.Navigator>
    )
}
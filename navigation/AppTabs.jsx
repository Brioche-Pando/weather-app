import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";
import HomeStack from '../navigation/HomeStack'
import CreditScreen from '../screens/CreditScreen'

const Tab = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-home"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
    Credit: {
        screen: CreditScreen,
        navigationOptions: {
            tabBarLabel: "Crédit",
            tabBarOptions: {
                activeTintColor: "#006600",
            },
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name="md-home"
                        size={24}
                        color={tabInfo.focused ? "#006600" : "#8e8e93"}
                    />
                );
            },
        },
    },
})

export default function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, showIcon: false }} />
            <Tab.Screen name="Crédit" component={CreditScreen} />
        </Tab.Navigator>
    )
}
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from '../navigation/HomeStack'
import CreditScreen from '../screens/CreditScreen'

const Tab = createBottomTabNavigator()

export default function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="Crédit" component={CreditScreen} />
        </Tab.Navigator>
    )
}
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import WeatherScreen from '../screens/WeatherScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        </Stack.Navigator>
    );
}
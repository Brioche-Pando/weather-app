import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import WeatherScreen from '../screens/WeatherScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            defaultScreen='Home'
            screenOptions={{
                headerStyle: { backgroundColor: '#2b334f' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'light',
                },
            }
            }
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="WeatherScreen" component={WeatherScreen} options={{ title: 'Météo' }} />
        </Stack.Navigator >
    );
}
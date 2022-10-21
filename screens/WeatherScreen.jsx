import { StyleSheet, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import WeatherInfos from '../components/WeatherInfos';

export default function WeatherScreen() {
    const route = useRoute();

    return (
        <ScrollView>
            <View style={styles.container}>
                {route.params.hourly.map(hourly => {
                    return (
                        <WeatherInfos key={hourly.datetime} datetime={hourly.datetime} icon={hourly.icon} condition={hourly.condition} temperature={hourly.temperature} hourly={hourly.hourly} />
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

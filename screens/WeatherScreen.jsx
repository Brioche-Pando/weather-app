import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import getWeather from '../api/WeatherApi'
import WeatherInfos from '../components/WeatherInfos'

export default function WeatherScreen() {
    const route = useRoute()
    const { data, isLoading, isError } = useQuery({ queryFn: () => getWeather('nantes/' + route.params.date), queryKey: ['weatherCall'], queryKey: [route.params.date] })

    return (
        <ScrollView>
            {isLoading ? <ActivityIndicator /> : isError ? <Text>{'nantes/' + route.params.date}</Text> : (
                <View style={styles.container}>
                    {data.hourly.map(hourly => {
                        return (
                            <WeatherInfos key={hourly.datetime} datetime={hourly.datetime} icon={hourly.icon} condition={hourly.condition} temperature={hourly.temperature} hourly={hourly.hourly} />
                        )
                    })}
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121521',
        justifyContent: 'center'
    },
})

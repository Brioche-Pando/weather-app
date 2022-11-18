import { StyleSheet, View, ScrollView, Text, ActivityIndicator, Button } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import getWeather from '../api/WeatherApi'
import WeatherInfos from '../components/WeatherInfos'
import theme from '../themes/default'

export default function WeatherScreen() {
    const route = useRoute()
    const { data, isLoading, isError, refetch } = useQuery({ queryFn: () => getWeather('nantes/' + route.params.date), queryKey: ['weatherCall', route.params.date] })

    return (
        isLoading ?
            <View style={{ backgroundColor: theme.colors.primary0, flex: 1, alignItem: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
            : isError ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Erreur lors de la requête</Text>
                    <Button
                        onPress={refetch}
                        title="Reload"
                        color={theme.colors.errorSurface}
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                : (

                    <ScrollView>
                        <View style={styles.container}>
                            {data.hourly.map(hourly => {
                                return (
                                    <WeatherInfos key={hourly.datetime} datetime={hourly.datetime} icon={hourly.icon} condition={hourly.condition} temperature={hourly.temperature} hourly={hourly.hourly} />
                                )
                            })}
                        </View>
                    </ScrollView>
                )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary0,
        justifyContent: 'center'
    },
})

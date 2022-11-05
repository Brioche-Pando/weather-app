import React, { Fragment } from 'react'
import { RefreshControl, StyleSheet, SafeAreaView, View, Image, Text, Button, ScrollView, ActivityIndicator } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import getWeather from '../api/WeatherApi'
import WeatherInfos from '../components/WeatherInfos'

import windIcon from '../assets/icons/wind.png'
import humidityIcon from '../assets/icons/humidity.png'
import rainIcon from '../assets/icons/rain.png'
import sunIcon from '../assets/icons/sun.png'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function HomeSreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Weathers />
        </SafeAreaView>
    )
}

function Weathers() {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => (
            setRefreshing(false)),
            refetch()
        )

    }, []);

    const { data, isLoading, isError, refetch } = useQuery({ queryFn: () => getWeather('nantes'), queryKey: ['weatherCall', 'nantes'] })

    return (
        isLoading ?
            <View style={{ backgroundColor: '#121521', flex: 1, alignItem: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
            : isError ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff' }}>Erreur lors de la requête</Text>
                    <Button
                        onPress={refetch}
                        title="Reload"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                : (
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={styles.header}>
                            <View style={{ marginBottom: 25, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={{
                                        uri: data.currentConditions.iconBig,
                                        width: 85,
                                        height: 85
                                    }}
                                />
                                <View style={{ marginLeft: 25 }}>
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Actuellement</Text>
                                    <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>{data.currentConditions.temperature.value}{data.currentConditions.temperature.unit}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.currentConditionIcon}
                                        source={windIcon}
                                    />
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{data.currentConditions.windSpeed.value} {data.currentConditions.windSpeed.unit}</Text>
                                    <Text style={{ color: '#cacbcf', fontSize: 12 }}>Vent</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.currentConditionIcon}
                                        source={humidityIcon}
                                    />
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{data.currentConditions.humidity.value} {data.currentConditions.humidity.unit}</Text>
                                    <Text style={{ color: '#cacbcf', fontSize: 12 }}>Humidité</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.currentConditionIcon}
                                        source={rainIcon}
                                    />
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>XX %</Text>
                                    <Text style={{ color: '#cacbcf', fontSize: 12 }}>Pluie</Text>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.currentConditionIcon}
                                        source={sunIcon}
                                    />
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>XX %</Text>
                                    <Text style={{ color: '#cacbcf', fontSize: 12 }}>UV</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.dayPreviewContainer}>
                            {data.next5DaysConditions.map(day => {
                                return (
                                    <WeatherInfos key={day.date} date={day.date} icon={day.icon} condition={day.condition} temperature={day.temperature} hourly={day.hourly} />
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
        backgroundColor: '#121521',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#2b334f',
        marginBottom: 25,
        paddingTop: 75,
        paddingBottom: 35,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    currentConditionIcon: {
        with: 15,
        height: 15,
        marginBottom: 5,
        resizeMode: 'contain'
    }
})

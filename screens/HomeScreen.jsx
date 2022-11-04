import React, { Fragment } from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text, ScrollView, ActivityIndicator } from 'react-native'
import { useQuery } from '@tanstack/react-query'
import getWeather from '../api/WeatherApi'
import WeatherInfos from '../components/WeatherInfos'

import windIcon from '../assets/icons/wind.png'
import humidityIcon from '../assets/icons/humidity.png'
import rainIcon from '../assets/icons/rain.png'
import sunIcon from '../assets/icons/sun.png'

export default function HomeSreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Weathers />
        </SafeAreaView>
    )
}

function Weathers() {
    const { data, isLoading, isError } = useQuery({ queryFn: () => getWeather('nantes'), queryKey: ['weatherCall'], queryKey: ['nantes'] })

    return (
        <ScrollView>
            {isLoading ? <ActivityIndicator /> : isError ? <Text>ERROR</Text> : (
                <Fragment>
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
                                <Text style={{ color: '#fff', fontSize: 20 }}>Actuellement</Text>
                                <Text style={{ color: '#fff', fontSize: 32 }}>{data.currentConditions.temperature.value}{data.currentConditions.temperature.unit}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={windIcon}
                                />
                                <Text style={{ color: '#fff', fontSize: 16 }}>{data.currentConditions.windSpeed.value} {data.currentConditions.windSpeed.unit}</Text>
                                <Text style={{ color: '#cacbcf', fontSize: 12 }}>Vent</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={humidityIcon}
                                />
                                <Text style={{ color: '#fff', fontSize: 16 }}>{data.currentConditions.humidity.value} {data.currentConditions.humidity.unit}</Text>
                                <Text style={{ color: '#cacbcf', fontSize: 12 }}>Humidité</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={rainIcon}
                                />
                                <Text style={{ color: '#fff', fontSize: 16 }}>XX %</Text>
                                <Text style={{ color: '#cacbcf', fontSize: 12 }}>Pluie</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={sunIcon}
                                />
                                <Text style={{ color: '#fff', fontSize: 16 }}>XX %</Text>
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
                </Fragment>
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

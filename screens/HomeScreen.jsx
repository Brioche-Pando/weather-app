import React, { Fragment } from 'react'
import { StyleSheet, SafeAreaView, View, Image, Text, ScrollView, ActivityIndicator } from 'react-native'

import {
    useQuery,
} from '@tanstack/react-query'
import getWeather from '../api/WeatherApi'
import WeatherInfos from '../components/WeatherInfos';

export default function HomeStack() {
    return (
        <SafeAreaView style={styles.container}>
            <Weathers />
        </SafeAreaView>
    )
}

function Weathers() {
    // Queries
    const { data, isLoading, isError } = useQuery(['weather'], getWeather)
    console.log(data);
    return (
        <ScrollView>
            {isLoading ? <ActivityIndicator /> : isError ? <Text>ERROR</Text> : (
                <Fragment>
                    <View>
                        <Text>Météo de Nantes</Text>
                        <View>
                            <Image
                                style={styles.currentConditionBigIcon}
                                source={{
                                    uri: data.currentConditions.iconBig
                                }}
                            />
                            <View>
                                <Text>Actuellement</Text>
                                <Text>{data.currentConditions.temperature.value}{data.currentConditions.temperature.unit}</Text>
                            </View>
                        </View>
                        <View>
                            <View>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={{
                                        uri: '../assets/icons/wind'
                                    }}
                                />
                                <Text>{data.currentConditions.windSpeed.value}{data.currentConditions.windSpeed.unit}</Text>
                                <Text>Vent</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={{
                                        uri: '../assets/icons/humidity'
                                    }}
                                />
                                <Text>{data.currentConditions.humidity.value}{data.currentConditions.humidity.unit}</Text>
                                <Text>Humidité</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={{
                                        uri: '../assets/icons/rain'
                                    }}
                                />
                                <Text>XX %</Text>
                                <Text>Pluie</Text>
                            </View>
                            <View>
                                <Image
                                    style={styles.currentConditionIcon}
                                    source={{
                                        uri: '../assets/icons/sun'
                                    }}
                                />
                                <Text>XX %</Text>
                                <Text>UV</Text>
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

// function DayPreview(props) {
//     return (
//         <View style={styles.dayPreview}>
//             <Link to={{ screen: 'WeatherScreen', params: { hourly: props.hourly } }}>
//                 <Text>{props.date}</Text>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Image
//                         style={styles.dayPreviewIcon}
//                         source={{
//                             uri: props.icon
//                         }}
//                     />
//                     <Text>{props.condition}</Text>
//                 </View>
//                 <Text>max. {props.temperature.max}{props.temperature.unit}</Text>
//             </Link>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    currentConditionBigIcon: {
        with: 100,
        height: 100,
        resizeMode: 'contain'
    },
    currentConditionIcon: {
        with: 25,
        height: 25,
        resizeMode: 'contain'
    }
})

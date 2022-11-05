import React, { Fragment } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';


export default function WeatherInfos(props) {
    const route = useRoute()

    return (
        <View style={styles.container}>
            {route.name == 'Home' ?
                <Link
                    to={{ screen: 'WeatherScreen', params: { date: props.date } }}
                >
                    <View style={styles.weatherInfos}>
                        <Text style={{ color: '#fff' }}>{getDayName(props.date)}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.weatherInfosIcon}
                                source={{
                                    uri: props.icon
                                }}
                            />
                            <Text style={{ color: '#cacbcf' }}>{props.condition}</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>max. {props.temperature.max}{props.temperature.unit}</Text>
                    </View>
                </Link>
                : (
                    <View style={styles.weatherInfos}>
                        <Text style={{ color: '#fff' }}>{getHoursMinutes(props.datetime)}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.weatherInfosIcon}
                                source={{
                                    uri: props.icon
                                }}
                            />
                            <Text style={{ color: '#cacbcf' }}>{props.condition}</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>max. {props.temperature.value}{props.temperature.unit}</Text>
                    </View>
                )}
        </View>
    )
}

function getDayName(date) {
    let a = new Date(date);
    let days = []
    days[0] = "Dim."
    days[1] = "Lun."
    days[2] = "Mar."
    days[3] = "Mer."
    days[4] = "Jeu."
    days[5] = "Ven."
    days[6] = "Sam."
    return days[a.getDay()]
}

function getHoursMinutes(datetime) {
    const _datetime = new Date(datetime)
    let hour = _datetime.getHours()
    let minutes = _datetime.getMinutes()

    hour = ("0" + hour).slice(-2)
    minutes = ("0" + minutes).slice(-2)

    return hour + ':' + minutes
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121521'
    },
    weatherInfos: {
        paddingVertical: 25,
        marginHorizontal: 10,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#797c86'
    },
    weatherInfosIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        resizeMode: 'contain'
    }
})
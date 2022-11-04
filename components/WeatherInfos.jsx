import React, { Fragment } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';


export default function WeatherInfos(props) {
    const route = useRoute()

    return (
        <View>
            {route.name == 'Home' ?
                <Link to={{ screen: 'WeatherScreen', params: { date: props.date } }} style={styles.weatherInfos}>
                    <Text style={{ color: '#fff' }}>{getDayName(props.date)}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={styles.weatherInfosIcon}
                            source={{
                                uri: props.icon
                            }}
                        />
                        <Text style={{ color: '#cacbcf' }}>{props.condition}</Text>
                    </View>
                    <Text style={{ color: '#fff' }}>max. {props.temperature.max}{props.temperature.unit}</Text>
                </Link>
                : (
                    <View style={styles.weatherInfos}>
                        <Text>{props.datetime}</Text>
                        <View>
                            <Image
                                style={styles.weatherInfosIcon}
                                source={{
                                    uri: props.icon
                                }}
                            />
                            <Text>{props.condition}</Text>
                        </View>
                        <Text>max. {props.temperature.value}{props.temperature.unit}</Text>
                    </View>
                )}
        </View>
    )
}

function getDayName (date) {
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

const styles = StyleSheet.create({
    weatherInfos: {
        padding: 10,
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    weatherInfosIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
        resizeMode: 'contain'
    }
})
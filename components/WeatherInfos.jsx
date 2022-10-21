import React, { Fragment } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { Link } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';


export default function WeatherInfos(props) {
    const route = useRoute();

    return (
        <View style={styles.weatherInfos}>
            {route.name == 'Home' ?
                <Link to={{ screen: 'WeatherScreen', params: { hourly: props.hourly } }}>
                    <Text>{props.date}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.weatherInfosIcon}
                            source={{
                                uri: props.icon
                            }}
                        />
                        <Text>{props.condition}</Text>
                    </View>
                    <Text>max. {props.temperature.max}{props.temperature.unit}</Text>
                </Link>
                : (
                    <Fragment>
                        <Text>{props.datetime}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.weatherInfosIcon}
                                source={{
                                    uri: props.icon
                                }}
                            />
                            <Text>{props.condition}</Text>
                        </View>
                        <Text>max. {props.temperature.value}{props.temperature.unit}</Text>
                    </Fragment>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfos: {
        padding: 10,
        flex: 1,
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
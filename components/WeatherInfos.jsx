/* eslint-disable react/prop-types */
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { getDayName, getHoursMinutes } from '../utils/utils';
import theme from '../themes/default';

export default function WeatherInfos(props) {
    const route = useRoute();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {route.name == 'Home' ?
                <TouchableOpacity
                    onPress={() => navigation.navigate('WeatherScreen', {
                        screen: 'Feed',
                        date: props.date
                    })}
                    style={styles.weatherInfos}
                >
                    <Text style={{ color: theme.colors.white }}>{getDayName(props.date)}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.weatherInfosIcon}
                            source={{
                                uri: props.icon
                            }}
                        />
                        <Text style={{ color: theme.colors.gray1 }}>{props.condition}</Text>
                    </View>
                    <Text style={{ color: theme.colors.white }}>max. {props.temperature.max}{props.temperature.unit}</Text>
                </TouchableOpacity>
                :
                <View style={styles.weatherInfos}>
                    <Text style={{ color: theme.colors.white }}>{getHoursMinutes(props.datetime)}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={styles.weatherInfosIcon}
                            source={{
                                uri: props.icon
                            }}
                        />
                        <Text style={{ color: theme.colors.gray1 }}>{props.condition}</Text>
                    </View>
                    <Text style={{ color: theme.colors.white }}>max. {props.temperature.value}{props.temperature.unit}</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary0
    },
    weatherInfos: {
        paddingVertical: theme.spacing.doubleSm,
        marginHorizontal: theme.spacing.demiLG,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border1
    },
    weatherInfosIcon: {
        width: 20,
        height: 20,
        marginRight: theme.spacing.quarter,
        resizeMode: 'contain'
    }
});
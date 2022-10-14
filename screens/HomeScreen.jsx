import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import {
    useQuery,
} from '@tanstack/react-query'
import getWeather from '../api/WeatherApi';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Weathers />
        </SafeAreaView>
    );
}

function Weathers() {
    // Queries
    const query = useQuery(['weather'], getWeather)

    return (
        <Fragment>
            <Text>Retour API :</Text>
            <Text>Nom ville recherchée : {query.data?.city_info.name}</Text>
            
            {/* TextInput à ajouter pour avoir une recherche / interaction avec l'api */}
        </Fragment>
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

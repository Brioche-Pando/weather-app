import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getWeather } from '../api/WeatherApi';

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
        <SafeAreaView>
            <FlatList>
                {query.data?.map(weather => (
                    <Text>{weather}</Text>
                ))}
            </FlatList>
        </SafeAreaView>
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

import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function SettingsScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.instructions}>
                Settings
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15,
    }
});

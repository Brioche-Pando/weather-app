import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, ActivityIndicator} from 'react-native';

export default function SettingsScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size='large' />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121521',
        alignItems: 'center',
        justifyContent: 'center',
    },
    instructions: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 15,
    }
});

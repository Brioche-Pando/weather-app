import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import theme from '../themes/default';

export default function CreditScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItem: 'center', justifyContent: 'center' }}>
                <Text style={styles.instructions}>Si vous me découvrez, merci de me découvrir !</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    instructions: {
        marginHorizontal: theme.spacing.base,
        color: theme.colors.white,
        fontSize: theme.fontSize.lg,
        textAlign: 'center'
    }
});

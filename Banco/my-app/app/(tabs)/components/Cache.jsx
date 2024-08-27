import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Saldo({ saldo }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/images/sicoob.jpg')}
            />
            <Text style={styles.title}>Saldo:</Text>
            <Text style={styles.value}>R$ {saldo.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    logo: {
        transform: [{ scale: 0.4 }],
        marginBottom: 20,
    },
    title: {
        color: '#00343f',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 35,
    },
    value: {
        color: '#01988d',
        letterSpacing: 1,
        fontSize: 65,
        fontWeight: 'bold',
    },
});

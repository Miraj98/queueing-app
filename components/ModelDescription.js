import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function ModelDescription({ name, description }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Model description</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 16,
        margin: 6,
        marginBottom: 0
    },
    label: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#FF5640',
        marginBottom: 6,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 6,
    },
    description: {
    }
})

export default ModelDescription
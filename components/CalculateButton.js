import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

function CalculateButton({ navigateToResultScreen }) {
    return ( 
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigateToResultScreen()}
        >
            <Text style={styles.label}>Calculate</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        padding: 18,
        alignItems: 'center',
        backgroundColor: '#0288d1'
    },
    label: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default CalculateButton
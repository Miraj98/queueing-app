import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


function Model({ name, subtitle, navigateToDetailScreen }) {
    return (
        <TouchableOpacity style={styles.container}
            onPress={navigateToDetailScreen}
        >
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.textStyle}>{subtitle[0]}</Text>
            <Text style={styles.textStyle}>{subtitle[1]}</Text>
            <Text style={styles.textStyle}>{subtitle[2]}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#',
        padding: 12,
        margin: 6,
        marginBottom: 3,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#D1D2D2'
        // borderRadius: 6
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        // color: 'white',
        paddingLeft: 8
    },
    textStyle: {
        // color: 'white',
        paddingLeft: 8
    }
})

export default Model
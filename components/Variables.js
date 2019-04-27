import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

function Variables({ lambda, mu, setLambda, setMu, id, m, setM, setS, setK, s, K }) {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.variable}>
                        <TextInput
                            style={styles.value}
                            value={lambda}
                            onChangeText={setLambda}
                        />
                        <Text style={styles.variableLabel}>Select 𝜆</Text>
                    </View>
                    <View style={styles.variable}>
                        <TextInput
                            style={styles.value}
                            value={mu}
                            onChangeText={setMu}
                        />
                        <Text style={styles.variableLabel}>Select 𝜇</Text>
                    </View>
                </View>
                <View style={styles.container}>
                    {
                        id === 2 || id === 4 ? <View style={styles.variable}>
                            <TextInput
                                style={styles.value}
                                value={m}
                                onChangeText={setM}
                            />
                            <Text style={styles.variableLabel}>Select m</Text>
                        </View> : null
                    }
                    {
                        id === 3 || id === 4 || id === 5 ? <View style={styles.variable}>
                            <TextInput
                                style={styles.value}
                                value={s}
                                onChangeText={setS}
                            />
                            <Text style={styles.variableLabel}>Select s</Text>
                        </View> : null
                    }
                    {
                        id === 5 ? <View style={styles.variable}>
                            <TextInput
                                style={styles.value}
                                value={K}
                                onChangeText={setK}
                            />
                            <Text style={styles.variableLabel}>Select K</Text>
                        </View> : null
                    }
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    variable: {
        flex: 1,
        margin: 6,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 6,
        padding: 6
    },
    value: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    variableLabel: {
        fontSize: 18,
    }
})

export default Variables
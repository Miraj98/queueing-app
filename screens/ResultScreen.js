import React from 'react'
import { Text, View,  StyleSheet } from 'react-native'
import ModelOutputs from '../utils/ModelOuputFunctions'

class ResultScreen extends React.Component {

    state = {
        L: null,
        Lq: null,
        W: null,
        Wq: null,
        Po: null
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id')
        const { lambda, mu, m, s, K } = this.props.navigation.getParam('variables')
        let L, Lq, W, Wq, Po
        if(id === 2) {
            [L, Lq, W, Wq, Po] = ModelOutputs[id](parseInt(lambda), parseInt(mu), parseInt(m))
        } else if(id === 3) {
            [L, Lq, W, Wq, Po] = ModelOutputs[id](parseInt(lambda), parseInt(mu), parseInt(s))
        } else if(id === 4) {
            [L, Lq, W, Wq, Po] = ModelOutputs[id](parseInt(lambda), parseInt(mu), parseInt(m), parseInt(s))
        } else if(id === 5) {
            [L, Lq, W, Wq, Po] = ModelOutputs[id](parseInt(lambda), parseInt(mu), parseInt(s), parseInt(K))
        } else {
            [L, Lq, W, Wq, Po] = ModelOutputs[id](parseInt(lambda), parseInt(mu))
        }
        this.setState(() => ({ L, Lq, W, Wq, Po }))
    }
    
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FF5640'
        },
        headerTintColor: 'white'
    }

    render() {
        // const { lambda, mu, m, s, K } = this.props.navigation.getParam('variables')
        const { L, Lq, W, Wq, Po } = this.state
        if(L === 'invalid') {
            return (
                <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Invalid Inputs</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.subcontainer}>
                        <Text style={styles.label}>L</Text>
                        <Text style={styles.value}>{Math.floor(L*1000)/1000}</Text>
                    </View>
                    <View style={styles.subcontainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.label}>L</Text>
                            <Text style={styles.subscript}>q</Text>
                        </View>
                        <Text style={styles.value}>{Math.floor(Lq*1000)/1000}</Text>
                    </View>
                    <View style={styles.subcontainer}>
                        <Text style={styles.label}>W</Text>
                        <Text style={styles.value}>{Math.floor(W*1000)/1000}</Text>
                    </View>
                    <View style={styles.subcontainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.label}>W</Text>
                            <Text style={styles.subscript}>q</Text>
                        </View>
                        <Text style={styles.value}>{Math.floor(Wq*1000)/1000}</Text>
                    </View>
                    <View style={styles.subcontainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.label}>P</Text>
                            <Text style={styles.subscript}>o</Text>
                        </View>
                        <Text style={styles.value}>{Math.floor(Po*1000)/1000}</Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    subcontainer: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 12
    },
    value: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 36,
        fontWeight: 'bold',
        lineHeight: 36,
        color: '#616161'
    },
    subscript: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 40,
        color: '#616161'
    }
})

export default ResultScreen
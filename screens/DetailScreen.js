import React from 'react'
import { View, StyleSheet } from 'react-native'
import ModelDescription from '../components/ModelDescription'
import Variables from '../components/Variables'
import CalculateButton from '../components/CalculateButton'
import { modelDataById } from '../utils/models'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class DetailScreen extends React.Component {

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#FF5640',
        },
        headerTintColor: 'white'
    }

    state = {
        lambda: '0',
        mu: '0',
        m: '0',
        s: '0',
        K: '0'
    }

    setLambda = lambda => this.setState(prevState => ({ ...prevState, lambda }))

    setMu = mu => this.setState(prevState => ({ ...prevState, mu }))

    setM = m => this.setState(prevState => ({ ...prevState, m }))

    setK = K => this.setState(prevState => ({ ...prevState, K }))
    
    setS = s => this.setState(prevState => ({ ...prevState, s }))

    navigateToResultScreen() {
        this.props.navigation.navigate('ResultScreen', { variables: this.state, id: this.props.navigation.getParam('id') })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <KeyboardAwareScrollView
                    innerRef={ref => {this.scroll = ref}}
                    scrollEnabled
                    enableOnAndroid
                    style={styles.container}>
                    <ModelDescription {...modelDataById[this.props.navigation.getParam('id')]} />
                    <Variables {...this.state}
                        setMu={mu => this.setMu(mu)}
                        setLambda={lambda => this.setLambda(lambda)}
                        setM={m => this.setM(m)}
                        setS={s => this.setS(s)}
                        setK={K => this.setK(K)}
                        id={this.props.navigation.getParam('id')} />
                </KeyboardAwareScrollView>
                <CalculateButton navigateToResultScreen={() => this.navigateToResultScreen()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    }
})

export default DetailScreen
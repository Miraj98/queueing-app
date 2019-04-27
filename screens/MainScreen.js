import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import { models } from '../utils/models'
import Model from '../components/Model'

class MainScreen extends React.Component {

    static navigationOptions = {
        headerTitle: 'Select a Queueing model',
        headerStyle: {
            backgroundColor: '#FF5640'
        },
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold'
        }
    }

    navigateToDetailScreen = (id) => {
        this.props.navigation.navigate('DetailScreen',{ id })
    }

    render() {
        return (
            <ScrollView style={styles.scrollContainer}>
            {
                models.map(model => <Model {...model} key={model.id} navigateToDetailScreen={() => this.navigateToDetailScreen(model.id)} />)
            }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        // backgroundColor: '#f8e9a1'
    }
})

export default MainScreen
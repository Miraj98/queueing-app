import { createStackNavigator } from 'react-navigation'
import MainScreen from '../screens/MainScreen'
import DetailScreen from '../screens/DetailScreen'
import ResultScreen from '../screens/ResultScreen'

const AppRoutes = {
    MainScreen,
    DetailScreen,
    ResultScreen
}

export default createStackNavigator(AppRoutes)
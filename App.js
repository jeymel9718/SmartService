import { createStackNavigator,createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/home';
import RoomsScreen from './src/screens/rooms';
import ServicesScreen from './src/screens/service'
import LoginScreen from './src/screens/login'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Rooms:{
    screen: RoomsScreen
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Rooms: {
    screen: RoomsScreen,
  },
  Service: {
    screen: ServicesScreen,
  },
  Login: {
    screen: LoginScreen,
  }
});

export default createAppContainer(MyDrawerNavigator);
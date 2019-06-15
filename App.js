import { createStackNavigator,createDrawerNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/screens/home';
import RoomsScreen from './src/screens/rooms';

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
});

export default createAppContainer(MyDrawerNavigator);
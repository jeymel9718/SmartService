import React from "react";
import { View, Text,Image,StyleSheet } from "react-native";
import { Header } from "react-native-elements";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../../assets/window.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center"}}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: ()=>this.props.navigation.openDrawer()}}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
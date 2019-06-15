import React from "react";
import {
  Button,
  Image,
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { Header } from 'react-native-elements';
import {
  colors,
  dimensionsDevice
} from '../../styles'

let rooms = []

class ListItem extends React.PureComponent {

  render() {
    const { item } = this.props

    return (
      <TouchableHighlight
        underlayColor='#DDDDDD'
      >
        <View style={styles.rowContainer}>
          <Image style={styles.thumbnail} source={{uri: item.imageUrl}} />
          <View style={styles.textContainer}>
            <Text style={styles.dateText}>{item.title}</Text>
            <Text style={styles.dateText}>Description: {item.description}</Text>
            <Text style={styles.environmentsText}>Beds: {item.beds}</Text>
            <Text style={styles.environmentsText}>Facilities: {item.facilities}</Text>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }
}

export default class RoomsScreen extends React.Component {
  static navigationOptions = {
    title: 'Rooms',
    drawerLabel: 'Rooms',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../assets/morning.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  constructor(){
    super()
    this.state = {
      data: [{imageUrl:'http://something.com',title:'',description:'',beds:'',facilities:[]}]
    }
  }

  _getData = async () =>{
    const response = await fetch('https://proyecto3.azurewebsites.net/api/rooms')
    console.log(response)
    this.setState({
      data: response
    })
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({ item, index }) => {
    return (
      <ListItem
        item={item}
        index={index}
      />
    )
  }

  render() {
    if(rooms.length > 0){
      this.setState({
        data: rooms
      })
    }
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
          centerComponent={{ text: 'Rooms', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' ,onPress: this._getData}}
        />
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    height: dimensionsDevice.width * 0.30,
    marginRight: 10,
    width: dimensionsDevice.width * 0.30,
  },
  textContainer: {
    flex: 1,
  },
  dateText: {
    color: colors.tertiary4,
    fontSize: 20,
    fontWeight: 'bold',
  },
  environmentsText: {
    color: colors.secondary3,
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: colors.black,
    height: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  }
})
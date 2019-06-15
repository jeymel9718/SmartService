import React from 'react'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  colors,
  dimensionsDevice,
  roundButton
} from '../../styles'
import ImgBackground from '../../../assets/wallpaper.jpg'
import IconUser from '../../../assets/user.png'
import IconLocked from '../../../assets/locked.png'
import LogoReact from '../../../assets/logo.png'

import Input from '../../components/login-components/logininput.js'
import LoginButton from '../../components/login-components/loginbutton'

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  constructor() {
    super()
    this.state = {
      name: '',
      username: '',
      password: '',
    }
  }

  _onNameTextChanged = event => {
    this.setState({
      name: event.nativeEvent.text,
    })
  }

  _onPasswordTextChanged = event => {
    this.setState({
      password: event.nativeEvent.text,
    })
  }

  _onUsernameTextChanged = event => {
    this.setState({
      username: event.nativeEvent.text,
    })
  }

  _onRegister = async () => {
    try {
      const URL = `http://${global.IpAddress}:8080/api/v1/users`
      console.log(URL)
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
          password: this.state.password
        }),
      })
      const json = await response.json()
      console.log(json)
      return true
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackground}>
        <View style={styles.containerImage}>
          <Image source={LogoReact} style={styles.image} />
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Input
            source={IconUser}
            placeholder="Name"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.name}
            onChange={this._onNameTextChanged}
          />
          <Input
            source={IconUser}
            placeholder="Username"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.username}
            onChange={this._onUsernameTextChanged}
          />
          <Input
            source={IconLocked}
            secureTextEntry={true}
            placeholder="Password"
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
            value={this.state.password}
            onChange={this._onPasswordTextChanged}
          />
        </KeyboardAvoidingView>
        <LoginButton
          onPressButton={this._onRegister}
          navigation={this.props.navigation}
          message='Register'
          errorTitle='Failed to register'
          errorMessage='Register error'
          screen='Login'
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    height: null,
    resizeMode: 'cover',
    width: null,
  },
  containerImage: {
    alignItems: 'center',
    flex: 2,
    justifyContent: 'center',
  },
  image: {
    height: dimensionsDevice.height * 0.20,
    width: dimensionsDevice.height * 0.20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  button: {
    ...roundButton,
    backgroundColor: colors.error,
    borderColor: colors.error,
    top: '-15%',
    height: 40,
    width: dimensionsDevice.width * 0.9,
  },
  text: {
    backgroundColor: 'transparent',
    color: colors.white,
  },
})

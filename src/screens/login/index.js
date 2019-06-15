import React from 'react'
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { dimensionsDevice } from '../../styles'

import ImgBackground from '../../../assets/wallpaper.jpg'
import IconUser from '../../../assets/user.png'
import IconLocked from '../../../assets/locked.png'
import LogoReact from '../../../assets/logo.png'

import Input from '../../components/login-components/logininput.js'
import LoginButton from '../../components/login-components/loginbutton'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    drawerLabel: 'Login',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../assets/user.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isDialogVisible: true,
    }
  }

  _onDialogClose = () => {
    this.setState({
      isDialogVisible: !this.state.isDialogVisible
    })
  }

  _onDialogSubmit = inputText => {
    global.IpAddress = inputText
    this.setState({
      isDialogVisible: !this.state.isDialogVisible
    })
    console.log(global.IpAddress)
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

  _isValidUser = async () => {
    global.username = this.state.username
    global.password = this.state.password
    const URL = `https://proyecto3.azurewebsites.net/api/HttpTrigger`
    try {
      console.log(URL)
      const response = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          email: this.state.username,
          password: this.state.password
        })
      })
      const json = await response.json()
      return json
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackground}>
        <View style={styles.containerImage}>
          <Image source={LogoReact} style={styles.image} />
          <Text style={styles.text}>SmartWindows</Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
          onPressButton={this._isValidUser}
          navigation={this.props.navigation}
          message='Login'
          errorTitle='Failed Login'
          errorMessage='Wrong username or password'
          screen='Home'
        />
        <View style={styles.containerSignUp}>
          <Text
            style={styles.text}
            onPress={() => this.props.navigation.navigate('Register')}
          >Create Account</Text>
        </View>
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
    flex: 3,
    justifyContent: 'center',
  },
  image: {
    height: dimensionsDevice.height * 0.30,
    width: dimensionsDevice.height * 0.30,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  containerSignUp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: '-20%',
    width: dimensionsDevice.width,
  },
  text: {
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
  },
  icon: {
    width: 24,
    height: 24,
  }
})

import React from 'react'
import {
  ActivityIndicator,
  Alert,
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { colors, dimensionsDevice } from '../../styles'

const MARGIN = 40

export default class LoginButton extends React.Component {

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()
  }

  _onPress = async () => {
    if (this.state.isLoading) return;

    this.setState({ isLoading: true })
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()
    try {
      const result = await this.props.onPressButton()
      this.setState({ isLoading: false })
      if (result) {
        this.buttonAnimated.setValue(0)
        this.growAnimated.setValue(0)
        this.props.navigation.navigate(this.props.screen)
      } else {
        Alert.alert(this.props.errorTitle, this.props.errorMessage)
        this.buttonAnimated.setValue(0)
        this.growAnimated.setValue(0)
      }
    } catch (error) {
      this.setState({ isLoading: false })
      alert(error)
    }
  }

  constructor() {
    super()
    this.state = {
      isLoading: false,
    }

    this.buttonAnimated = new Animated.Value(0)
    this.growAnimated = new Animated.Value(0)
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [dimensionsDevice.width - MARGIN, MARGIN],
    })
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    })
    return (
      <View style={styles.container}>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <ActivityIndicator size="large"
                color={colors.primary}
              />
            ) : (
                <Text style={styles.text}>{this.props.message}</Text>
              )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, { transform: [{ scale: changeScale }] }]}
          />
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.tertiary3,
    borderRadius: 20,
    height: MARGIN,
    justifyContent: 'center',
    zIndex: 100,
  },
  circle: {
    alignSelf: 'center',
    backgroundColor: colors.tertiary3,
    borderColor: colors.tertiary3,
    borderRadius: 100,
    borderWidth: 1,
    height: MARGIN,
    marginTop: -MARGIN,
    width: MARGIN,
    zIndex: 99,
  },
  text: {
    backgroundColor: 'transparent',
    color: colors.white,
  },
})

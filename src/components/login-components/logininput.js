import React from 'react'
import{
    StyleSheet,
    View,
    TextInput,
    Image
} from 'react-native'
import {colors, dimensionsDevice} from '../../styles'

export default class LoginInput extends React.Component{
    render(){
        return(
            <View style={styles.inputWrapper}>
                <Image source={this.props.source} style={styles.inlineImg}/>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    placeholderTextColor= "white"
                    underlineColorAndroid="transparent"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: colors.gray,
      width: dimensionsDevice.width*0.9,
      height: dimensionsDevice.height*0.05,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: colors.white,
    },
    inputWrapper: {
      flex: 1,
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: dimensionsDevice.width*0.063,
      height: dimensionsDevice.width*0.063,
      left: 35,
      top: '10%',
    },
})

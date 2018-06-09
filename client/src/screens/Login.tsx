import React from 'react'
import { View, SafeAreaView, ImageBackground, Dimensions } from 'react-native'
import { Text, Item, Input, Icon, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import { adopt } from 'react-adopt'
import { Toggle, Value } from 'react-powerplug'

import { AllGraphql } from '../graphql/login'

console.log('AllGraphql', AllGraphql)

const AdoptContainer = adopt({
  xxx: <Value initial={123} />
})

export interface LoginProps {
  screenProps: any
}
export interface LoginState {
  accountStatus: Boolean
  accountText: String
  // tslint:disable-next-line:no-null-keyword
  passwordStatus: Boolean
  passwordText: String
}
class Login extends React.Component<LoginProps, any> {
  constructor(props: any) {
    super(props)
    this.SignIn = this.SignIn.bind(this)
    this.accounClean = this.accounClean.bind(this)
    this.accountChangeText = this.accountChangeText.bind(this)
    this.passwordClean = this.passwordClean.bind(this)
    this.passwordChangeText = this.passwordChangeText.bind(this)
    this.state = {
      // tslint:disable-next-line:no-null-keyword
      accountStatus: null,
      accountText: '',
      // tslint:disable-next-line:no-null-keyword
      passwordStatus: null,
      passwordText: ''
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  renderPasswordStatus(status: String) {
    switch (status) {
      case 'success': {
        return this.state.passwordStatus === true
      }
      case 'error': {
        return this.state.passwordStatus === false
      }
      default:
        return undefined
    }
  }
  passwordChangeText(text: String) {
    this.setState({ passwordText: text })
    this.passwordDetect(text)
  }
  passwordDetect(text: String) {
    console.log(text.length)
    if (text.length > 0) {
      this.setState({
        passwordStatus: true
      })
    } else {
      this.setState({
        passwordStatus: false
      })
    }
  }
  accounClean() {
    this.setState({
      accountStatus: false,
      accountText: ''
    })
  }
  getDimensions(frame: String): number {
    switch (frame) {
      case 'width':
        return Dimensions.get('window').width
      case 'height':
        return Dimensions.get('window').height
      default:
        // tslint:disable-next-line:no-null-keyword
        return 0
    }
  }
  renderAccountStatus(status: String) {
    switch (status) {
      case 'success': {
        return this.state.accountStatus === true
      }
      case 'error': {
        return this.state.accountStatus === false
      }
      default:
        return undefined
    }
  }
  accountChangeText(text: String) {
    this.setState({ accountText: text })
    this.accountDetect(text)
  }
  accountDetect(text: String) {
    console.log(text.length)
    if (text.length > 0) {
      this.setState({
        accountStatus: true
      })
    } else {
      this.setState({
        accountStatus: false
      })
    }
  }
  SignIn(text) {
    if (text != undefined) {
      if (this.state.passwordStatus && this.state.accountStatus) {
        this.props.screenProps.changeToken(text)
      }
    }
  }
  passwordClean() {
    this.setState({
      passwordStatus: false,
      passwordText: ''
    })
  }
  render() {
    // return <AdoptContainer>
    //   {({ result: { container: {
    //     loginFn: { data, loading, error }
    //   } } }) => {

    return (
      <View>
        <Text>123</Text>
      </View>
    )

    //   }}
    // </AdoptContainer>
  }
}
// tslint:disable-next-line:variable-name

export default Login

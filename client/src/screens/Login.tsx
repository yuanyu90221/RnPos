import * as React from 'react'
import {
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { Text, Item, Input, Icon, Button } from 'native-base'
import { StackNavigator } from 'react-navigation'
import { adopt } from 'react-adopt'
import { Toggle, Value } from 'react-powerplug'
import { Query, Mutation } from 'react-apollo'

import { queryFn, loginFn } from '../graphql/login'

//console.log('AllGraphql', AllGraphql)

const AdoptContainer = adopt({
  queryFn,
  loginFn
})

//console.log('AdoptContainer', AdoptContainer)
export interface LoginProps {
  screenProps: any
  navigation: any
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
    this.PushToSignUpPage = this.PushToSignUpPage.bind(this)
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
  Login = loginFn => async () => {
    const {
      data: {
        login: { token }
      }
    }: any = await loginFn.mutation({
      variables: {
        email: this.state.accountText,
        password: this.state.passwordText
      }
    })
    this.SignIn(token)
  }
  passwordClean() {
    this.setState({
      passwordStatus: false,
      passwordText: ''
    })
  }
  PushToSignUpPage() {
    this.props.navigation.push('SignUp')
  }
  render() {
    // return <AdoptContainer>
    //   {({ result: { container: {
    //     loginFn: { data, loading, error }
    //   } } }) => {

    return (
      <AdoptContainer>
        {({ signUpFn, queryFn }) => {
          //   console.log('result', result)
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <ImageBackground
                opacity={0.5}
                source={{uri: 'https://images.unsplash.com/photo-1495965478447-052a41235743?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca957400c4e58a60e146eaaf0da399a8&auto=format&fit=crop&w=1322&q=80'}}
                style={{
                  flex: 1,
                  width: this.getDimensions('width'),
                  height: this.getDimensions('height')
                }}
              >
                <View
                  style={{
                    backgroundColor: 'white',
                    width: this.getDimensions('width'),
                    height: this.getDimensions('height') * 0.5,
                    opacity: 0.2
                  }}
                />
                <View
                  style={{
                    width: this.getDimensions('width'),
                    height: this.getDimensions('height')
                  }}
                >
                  <View style={{ marginTop: 40 }}>
                    <Item
                      error={this.renderAccountStatus('error')}
                      success={this.renderAccountStatus('success')}
                      style={{ marginLeft: 20, marginRight: 20 }}
                    >
                      <Input
                        placeholder="USERNAME"
                        value={this.state.accountText}
                        onChangeText={this.accountChangeText}
                      />
                      <Icon
                        style={{ color: 'white' }}
                        name="close-circle"
                        onPress={this.accounClean}
                      />
                    </Item>
                    <Item
                      error={this.renderPasswordStatus('error')}
                      success={this.renderPasswordStatus('success')}
                      style={{ marginLeft: 20, marginRight: 20 }}
                    >
                      <Input
                        placeholder="PASSWORD"
                        value={this.state.passwordText}
                        onChangeText={this.passwordChangeText}
                      />
                      <Icon
                        style={{ color: 'white' }}
                        name="close-circle"
                        onPress={this.passwordClean}
                      />
                    </Item>
                  </View>
                  <Button
                    full
                    style={{ marginTop: 40, backgroundColor: 'brown' }}
                    onPress={this.Login(loginFn)}
                  >
                    <Text>Sign In</Text>
                  </Button>
                  <TouchableOpacity onPress={this.PushToSignUpPage}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 20,
                        color: 'white'
                      }}
                    >
                      Don't have an account? Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </SafeAreaView>
          )
        }}
      </AdoptContainer>
    )

    //   }}
    // </AdoptContainer>
  }
}
// tslint:disable-next-line:variable-name

export default Login

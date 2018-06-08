import React from 'react'
import {
  View,
  Dimensions
} from 'react-native'
import { Container, Header, Content, Item, Input, Icon, Button, Text } from 'native-base'
class SignUp extends React.Component {
  state = {
    account: '',
    password: '',
    nickname: ''
  }

  accountInput = (e)  => {
    console.log(e.nativeEvent.text)
    this.setState({
      account: e.nativeEvent.text
    })
  }

  passwordInput = (e)  => {
    console.log(e.nativeEvent.text)
    this.setState({
      password: e.nativeEvent.text
    })
  }

  nicknameInput = (e)  => {
    console.log(e.nativeEvent.text)
    this.setState({
      nickname: e.nativeEvent.text
    })
  }

  signUp = () => {
    console.log(this.state.account, this.state.password, this.state.nickname)
  }

  render() {

    return (
      <Container >
      <Content >
        <Item style={{marginTop: Dimensions.get('window').height * 0.1}}>
          <Input placeholder='email' value={this.state.account} onChange={this.accountInput}/>
        </Item >
        <Item style={{}}>
          <Input placeholder='password' secureTextEntry value={this.state.password}
          onChange={this.passwordInput}/>
        </Item >
        <Item style={{}}>
          <Input placeholder='nickname' value={this.state.nickname}
          onChange={this.nicknameInput}/>
        </Item >
        <Button onPress={this.signUp} full style={{marginTop: 40}}>
            <Text>SignUp</Text>
          </Button>
      </Content>
    </Container>
    )
  }
}
export default SignUp
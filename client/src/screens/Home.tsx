
import * as React from 'react'
import {
  View,
  SafeAreaView
}from 'react-native'
import { Text, Item, Input, Icon } from 'native-base'
import { StackNavigator } from 'react-navigation'

export interface LoginProps {
  screenProps: any
}

export default class Login extends React.Component<LoginProps, any> {
  static navigationOptions = {
    title: 'Home'
  }
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    console.log(this.props.screenProps)
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{marginTop: 20}}>
        <Text>HomePage</Text>
        </View>
      </SafeAreaView>
    )
  }
}
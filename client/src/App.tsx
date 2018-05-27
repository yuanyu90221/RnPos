import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import Login from './screens/Login'
import { StackNavigator } from 'react-navigation'

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

export const RootStack : any = StackNavigator({
  Home: {
    screen: Login
  }
})
export default class App extends React.Component<Props, State> {
  render() {
    return (
      <RootStack></RootStack>
    )
  }
}

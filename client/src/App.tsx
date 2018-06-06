import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react'
import Login from './screens/Login'
import * as Stack from 'react-navigation'
import { Button, Icon } from 'native-base'
import Chat from './screens/Chat'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import ChatRoom from './screens/ChatRoom'

console.disableYellowBox = true

export interface Props {}
export interface State {
  LoginIn: Boolean
  changeLoginStatus: Function
}

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

// tslint:disable-next-line:variable-name
export const LoginStack: any = Stack.createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      // tslint:disable-next-line:no-null-keyword
      header: null
    }
  }
})
// tslint:disable-next-line:variable-name
export const ChatStack: any = Stack.createStackNavigator({
  ChatList: {
    screen: Chat
  },
  ChatRoom: {
    screen: ChatRoom,
    navigationOptions: {
      tabBarVisible: false
    }
  }
})
ChatStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  console.log(navigation)
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}
// tslint:disable-next-line:variable-name
export const TabBarStack: any = Stack.createTabNavigator(
  {
    Chat: {
      screen: ChatStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Icon
            name={'comments'}
            type={'FontAwesome'}
            style={{ color: 'navy' }}
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: 'navy',
      inactiveTintColor: 'gray'
    }
  }
)
export const link = createHttpLink({
  uri: 'http://localhost:8080/graphql'
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})
export default class App extends React.Component<Props, State> {
  changeLoginStatus: () => void
  constructor(props: any) {
    super(props)
    this.changeLoginStatus = () => {
      this.setState(state => {
        const newLogin = !state.LoginIn
        return {
          LoginIn: newLogin
        }
      })
    }
    this.state = {
      LoginIn: false,
      changeLoginStatus: this.changeLoginStatus
    }
  }
  render() {
    if (this.state.LoginIn) {
      return <TabBarStack />
    } else {
      return (
        <ApolloProvider client={client}>
          <LoginStack screenProps={this.state} />
        </ApolloProvider>
      )
    }
  }
}

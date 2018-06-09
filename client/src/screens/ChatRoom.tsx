import React from 'react'
import { View, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
export interface ChatRoomProps {
  ChatRoomProps: any
}
export default class ChatRoom extends React.Component<any, any> {
  static navigationOptions = {
    tabBarVisible: false,
    // tslint:disable-next-line:no-null-keyword
    tabBarLabel: null
  }
  constructor(props: any) {
    super(props)
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    })
  }
  onSend(messages = []) {
    this.setState((previousState: any) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages: any) => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    )
  }
}

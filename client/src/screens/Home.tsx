
import * as React from 'react'
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Dimensions
}from 'react-native'
import { Text, Item, Input, Icon, Container, Header, Content, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base'
import { StackNavigator } from 'react-navigation'
import  SendBird from 'sendbird'
export interface LoginProps {
  screenProps: any
}
const chatArrayTest = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1499201437108-bdae88dbda7c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63fe55e85090399e10a529fcfd58fc5d&auto=format&fit=crop&w=1322&q=80',
    name: 'A',
    lastMessage: 'Test',
    lastSeen : '03:25 pm'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1493809161914-477bd28bfb68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d6a113e734c52e0c643c5d1d5e5b0c4&auto=format&fit=crop&w=668&q=80',
    name: 'B',
    lastMessage: 'Hey',
    lastSeen : '03:25 pm'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1523622805393-a76e08d71e79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dbd097f5f88cda93dc1b0c72bde6cd27&auto=format&fit=crop&w=1500&q=80',
    name: 'C',
    lastMessage: 'Hello',
    lastSeen : '03:25 pm'
  }
]
export default class Login extends React.Component<LoginProps, any> {
  static navigationOptions = {
    title: 'Home',
    // tslint:disable-next-line:no-null-keyword
    header: null
  }
  constructor(props: any) {
    super(props)
    this.state = {
    }

  }
  componentDidMount() {
    console.log(this.props.screenProps)
    const sb = new SendBird({
      appId: '8B6E2DF1-507B-4A27-ACDB-2F07517C5FC1'
    })
    sb.connect('navy774989@gmail.com', function(user, error) {
    console.log(user)
    })
  }
  chatListLoop(chatArray: Array<any> ) {
    let views = [ ]
    for (const element in chatArray) {
      if (chatArray.hasOwnProperty(element)) {
        const view = chatArray[element]
        views.push(this.renderChatList(view.imageUrl, view.name, view.lastMessage, view.lastSeen))
      }
    }
    return views
  }
  renderChatList( imageUrl: any, name: String , lastMessage: String, lastSeen: String) {
    return(
      <ListItem>
        <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {
            this.props.navigation.push('ChatRoom')
        }}>
          <Left>
            <Thumbnail source={{ uri: imageUrl }} />
          </Left>
          <Body>
            <Text>{name}</Text>
            <Text note>{lastMessage}</Text>
          </Body>
          <Right>
            <Text note>{lastSeen}</Text>
          </Right>
        </TouchableOpacity>
      </ListItem>

    )
  }
  render() {
    return (
        <Container>
          <Header />
          <Content>
          <List>

              {this.chatListLoop(chatArrayTest)}

          </List>
          </Content>
        </Container>
    )
  }
}
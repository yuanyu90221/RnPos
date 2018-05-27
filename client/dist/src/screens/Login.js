import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Item, Input, Icon } from 'native-base';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.accounClean = this.accounClean.bind(this);
        this.accountChangeText = this.accountChangeText.bind(this);
        this.state = {
            // tslint:disable-next-line:no-null-keyword
            accountStatus: null,
            accountText: ''
        };
    }
    componentDidMount() {
        console.log(this.props.screenProps);
    }
    renderStatus(status) {
        switch (status) {
            case 'success': {
                return this.state.accountStatus === true;
            }
            case 'error': {
                return this.state.accountStatus === false;
            }
            default:
                return undefined;
        }
    }
    accountChangeText(text) {
        this.setState({ accountText: text });
        this.accountDetect(text);
    }
    accountDetect(text) {
        console.log(text.length);
        if (text.length > 0) {
            this.setState({
                accountStatus: true
            });
        }
        else {
            this.setState({
                accountStatus: false
            });
        }
    }
    accounClean() {
        this.setState({
            accountStatus: false,
            accountText: ''
        });
    }
    render() {
        return (<SafeAreaView>
        <View style={{ marginTop: 20 }}>
          <Item error={this.renderStatus('error')} success={this.renderStatus('success')} style={{ marginLeft: 20, marginRight: 20 }}>
              <Input placeholder='請輸入您的帳號' value={this.state.accountText} onChangeText={this.accountChangeText}/>
              <Icon onPress={() => { this.props.screenProps.changeLoginStatus(); }} name='close-circle'/>
          </Item>
        </View>
      </SafeAreaView>);
    }
}
Login.navigationOptions = {
    title: 'Home',
    // tslint:disable-next-line:no-null-keyword
    header: null
};
//# sourceMappingURL=Login.js.map
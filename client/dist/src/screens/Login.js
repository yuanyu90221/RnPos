import * as React from 'react';
import { View, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import { Text, Item, Input, Icon, Button } from 'native-base';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.SignIn = this.SignIn.bind(this);
        this.accounClean = this.accounClean.bind(this);
        this.accountChangeText = this.accountChangeText.bind(this);
        this.passwordClean = this.passwordClean.bind(this);
        this.passwordChangeText = this.passwordChangeText.bind(this);
        this.state = {
            // tslint:disable-next-line:no-null-keyword
            accountStatus: null,
            accountText: '',
            // tslint:disable-next-line:no-null-keyword
            passwordStatus: null,
            passwordText: ''
        };
    }
    componentDidMount() {
        console.log(this.props.screenProps);
    }
    renderPasswordStatus(status) {
        switch (status) {
            case 'success': {
                return this.state.passwordStatus === true;
            }
            case 'error': {
                return this.state.passwordStatus === false;
            }
            default:
                return undefined;
        }
    }
    passwordChangeText(text) {
        this.setState({ passwordText: text });
        this.passwordDetect(text);
    }
    passwordDetect(text) {
        console.log(text.length);
        if (text.length > 0) {
            this.setState({
                passwordStatus: true
            });
        }
        else {
            this.setState({
                passwordStatus: false
            });
        }
    }
    accounClean() {
        this.setState({
            accountStatus: false,
            accountText: ''
        });
    }
    getDimensions(frame) {
        switch (frame) {
            case 'width':
                return Dimensions.get('window').width;
            case 'height':
                return Dimensions.get('window').height;
            default:
                // tslint:disable-next-line:no-null-keyword
                return 0;
        }
    }
    renderAccountStatus(status) {
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
    SignIn() {
        if (this.state.passwordStatus && this.state.accountStatus) {
            this.props.screenProps.changeLoginStatus();
        }
    }
    passwordClean() {
        this.setState({
            passwordStatus: false,
            passwordText: ''
        });
    }
    render() {
        return (<SafeAreaView style={{ flex: 1 }}>
        <ImageBackground opacity={0.5} source={require('../../../Images/LoginBackground.jpg')} style={{ flex: 1, width: this.getDimensions('width'), height: this.getDimensions('height') }}>
          <View style={{ backgroundColor: 'white', width: this.getDimensions('width'), height: this.getDimensions('height') * 0.5, opacity: 0.2 }}>

          </View>
          <View style={{ width: this.getDimensions('width'), height: this.getDimensions('height') }}>
            <View style={{ marginTop: 40 }}>
              <Item error={this.renderAccountStatus('error')} success={this.renderAccountStatus('success')} style={{ marginLeft: 20, marginRight: 20 }}>
                <Input placeholder='USERNAME' value={this.state.accountText} onChangeText={this.accountChangeText}/>
              <Icon style={{ color: 'white' }} name='close-circle' onPress={this.accounClean}/>
              </Item>
              <Item error={this.renderPasswordStatus('error')} success={this.renderPasswordStatus('success')} style={{ marginLeft: 20, marginRight: 20 }}>
                <Input placeholder='PASSWORD' value={this.state.passwordText} onChangeText={this.passwordChangeText}/>
                <Icon style={{ color: 'white' }} name='close-circle' onPress={this.passwordClean}/>
              </Item>
            </View>
            <Button full style={{ marginTop: 40, backgroundColor: 'brown' }} onPress={this.SignIn}>
              <Text>Sign In</Text>
            </Button>
            <Text style={{ textAlign: 'center', marginTop: 20, color: 'white' }}>Don't have an account? Sign Up</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>);
    }
}
Login.navigationOptions = {
    title: 'Home',
    // tslint:disable-next-line:no-null-keyword
    header: null
};
//# sourceMappingURL=Login.js.map
import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Text } from 'native-base';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props.screenProps);
    }
    render() {
        return (<SafeAreaView>
        <View style={{ marginTop: 20 }}>
        <Text>HomePage</Text>
        </View>
      </SafeAreaView>);
    }
}
Login.navigationOptions = {
    title: 'Home'
};
//# sourceMappingURL=Home.js.map
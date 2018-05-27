import { StyleSheet } from 'react-native';
import * as React from 'react';
import Login from './screens/Login';
import { StackNavigator } from 'react-navigation';
const styles = StyleSheet.create({
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
});
export const RootStack = StackNavigator({
    Home: {
        screen: Login
    }
});
export default class App extends React.Component {
    render() {
        return (<RootStack></RootStack>);
    }
}
//# sourceMappingURL=App.js.map
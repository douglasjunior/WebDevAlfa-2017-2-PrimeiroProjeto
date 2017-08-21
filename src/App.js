import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    Text,
} from 'react-native';

import ImageTouch from './components/ImageTouch';

class App extends Component {

    render() {
        return (
            <View>

                <Text>App é o meu componente principal.</Text>

                <ImageTouch url="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" />
                <ImageTouch url="https://blog.algolia.com/wp-content/uploads/2015/12/react-native.png" />
                <ImageTouch url="http://i.imgur.com/oudmGva.png" />

            </View>
        )
    }
}

AppRegistry.registerComponent('PrimeiroProjeto', () => App);

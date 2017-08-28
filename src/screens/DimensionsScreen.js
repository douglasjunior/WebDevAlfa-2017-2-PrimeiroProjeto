import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
} from 'react-native';

class DimensionsScreen extends Component {

    render() {
        const { height, width } = Dimensions.get('window');

        return (
            <View>
                <Text>Dimensões da tela:</Text>
                <Text>Largure: {width}</Text>
                <Text>Altura: {height}</Text>
            </View>
        )
    }

}

export default DimensionsScreen;
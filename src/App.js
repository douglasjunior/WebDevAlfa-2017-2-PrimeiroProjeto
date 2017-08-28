import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    Text,
    Modal,
    Button,
    Geolocation,
    Platform,
} from 'react-native';

import ImageTouch from './components/ImageTouch';
import ListScreen from './screens/ListScreen';
import FormScreen from './screens/FormScreen';
import RequestScreen from './screens/RequestScreen';
import GeolocationScreen from './screens/GeolocationScreen';
import DimensionsScreen from './screens/DimensionsScreen';

class App extends Component {

    state = {
        exibirModal: false
    }

    componentDidMount() {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization();
        }
    }

    renderModal = () => {
        return (
            <View>
                <Button title="Abrir Modal"
                    onPress={() => this.setState({ exibirModal: true })} />

                <Modal
                    visible={this.state.exibirModal}
                    transparent={true}
                    onRequestClose={() => this.setState({ exibirModal: false })}
                >
                    <View style={{ flex: 1, backgroundColor: '#f00' }}>
                        <Text>Este é o conteúdo do Modal</Text>
                        <Button title="Fechar"
                            onPress={() => this.setState({ exibirModal: false })} />
                    </View>
                </Modal>
            </View>
        )
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#eee',
                flex: 1
            }}>

                {/* Remova o comentário do componente abaixo para exibí-lo. */}

                {/*<ListScreen />*/}
                {/*<FormScreen />*/}
                {/*{this.renderModal()}*/}
                {/*<RequestScreen />*/}
                {/*<GeolocationScreen />*/}

                <DimensionsScreen />

            </View>
        )
    }
}

AppRegistry.registerComponent('PrimeiroProjeto', () => App);

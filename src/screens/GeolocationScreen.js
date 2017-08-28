import React, { Component } from 'react';
import {
    View,
    Text,
    Geolocation,
} from 'react-native';

// Documentação sobre o Geolocation
// https://facebook.github.io/react-native/docs/geolocation.html
//
// Obs: 
// Para que a localização funcione no Android, você deve adicionar a permissão necessária no arquivo AndroidManifest.xml
// Para o iOS a permissão já vem adicionada por padrão no arquivo Info.plist
class GeolocationScreen extends Component {

    state = {}

    // Evento executado automaticamente logo após o componente ser exibido.
    // https://facebook.github.io/react/docs/react-component.html#mounting
    componentDidMount() {
        const config = { enableHighAccuracy: false };
        navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError, config);
    }

    // Callback disparado quando a localização é obtida.
    locationSuccess = (position) => {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        })
    }

    // Callback disparado se ocorrer algum erro ao obter a localização.
    locationError = (error) => {
        console.warn(error);
    }

    render() {
        const { latitude, longitude } = this.state;

        if (latitude && longitude) {
            return (
                <View>
                    <Text>Localização geográfica:</Text>
                    <Text>Latitude: {latitude}</Text>
                    <Text>Longitude: {longitude}</Text>
                </View>
            )
        }

        return (
            <View>
                <Text>Aguardando localização...</Text>
            </View>
        )
    }

}

export default GeolocationScreen;
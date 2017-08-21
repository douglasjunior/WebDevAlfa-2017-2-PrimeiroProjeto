import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
} from 'react-native';

class ImageTouch extends Component {

  abrirImagem = () => {
    const url = this.props.url;
    Linking.canOpenURL(url)
      .then((can) => {
        if (can)
          Linking.openURL(url);
        else
          alert("Não foi possível abrir a imagem.");
      })
  }

  render() {
    const url = this.props.url;
    return (
      <View>
        <TouchableOpacity onPress={this.abrirImagem} >
          <Image
            source={{ uri: url }}
            style={{ width: 200, height: 100 }} />
        </TouchableOpacity>
      </View>
    )
  }
}

export default ImageTouch;
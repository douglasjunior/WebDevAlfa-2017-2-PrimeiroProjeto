import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
} from 'react-native';

class FormScreen extends Component {

    state = {}

    onEntrarPress = () => {
        const { login, senha } = this.state;
        alert("Login: " + login + "\n"
            + "Senha: " + senha)
        //const texto = `Login: ${login}\nSenha: ${senha}`
    }

    onChangeLogin = (text) => {
        const state = { login: text }
        this.setState(state);
    }

    onChangeSenha = (senha) => {
        this.setState({ senha });
    }

    render() {

        return (
            <View>
                <TextInput value={this.state.login}
                    onChangeText={this.onChangeLogin}
                    keyboardType="email-address"
                />

                <TextInput value={this.state.senha}
                    onChangeText={this.onChangeSenha}
                    secureTextEntry={true}
                    returnKeyType="go"
                    onSubmitEditing={this.onEntrarPress} />

                <Button title="Entrar"
                    onPress={this.onEntrarPress} />
            </View>
        )
    }
}

export default FormScreen;
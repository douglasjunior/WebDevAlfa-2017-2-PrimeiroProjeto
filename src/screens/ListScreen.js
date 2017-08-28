import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

const DATA_LIST = [
    { nome: "Douglas" },
    { nome: "João" },
    { nome: "José" },
    { nome: "Antônio" },
    { nome: "Mário" },
]

class ListScreen extends Component {

    onItemPress = (item) => {
        console.log("Clicou no item:");
        console.log(item);
        alert("Clicou no item: " + item.nome);
    }

    renderItem = (record) => {
        const { item, index } = record;
        return (
            <TouchableOpacity
                onPress={() => this.onItemPress(item)}>

                <View style={{
                    backgroundColor: '#fff',
                    marginHorizontal: 16, marginVertical: 8,
                    padding: 16, borderRadius: 5,
                    elevation: 2, shadowOffset: {
                        width: 2,
                        height: 2,
                    }, shadowColor: '#333'
                }}>
                    <Text>{item.nome}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={DATA_LIST}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.nome}
            />
        )
    }
}

export default ListScreen;
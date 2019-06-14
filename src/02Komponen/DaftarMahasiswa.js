import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default class DaftarMahasiswa extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {nim: "1000"},
                {nim: "1001"},
                {nim: "1002"},
                {nim: "1003"},
                {nim: "1004"},
                {nim: "1005"},
                {nim: "1006"},
                {nim: "1007"},
                {nim: "1008"}
                ]
            };
    }

_renderItem = data => {
    return(
    <View>
        <Text style={styles.row}> {data.item.nim}</Text>
        </View>
        );
    };

render() {
    return (
    <View style={styles.container}>
    <Text> Data Mahasiswa </Text>
        <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            />
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1
    },
row: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1
    }
});
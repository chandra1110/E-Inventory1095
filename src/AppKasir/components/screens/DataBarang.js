import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Header from "./Header";


class DataBarang extends Component {
    static navigationOptions = {
        // headerLeft: null
        // title: 'Data Barang',
    };
    
    render() {
        return (

            <View style={styles.container}>
                <Header judul="Data Barang" />
                <View style={styles.BarangContainer}>
                    <Text style={styles.textKode}>Kode : 001</Text>
                    <Text style={styles.textNamaBarang}>Nama :Kopi Nescafe</Text>
                </View>

                <View style={styles.BarangContainer}>
                    <Text style={styles.textKode}>Kode : 002</Text>
                    <Text style={styles.textNamaBarang}>Nama : Sabun Mandi</Text>
                </View>

                <View style={styles.BarangContainer}>
                    <Text style={styles.textKode}>Kode : 003</Text>
                    <Text style={styles.textNamaBarang}>Nama : Indomie</Text>
                </View>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    BarangContainer:{
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#bfbfbf',
        marginTop:5,
        height: 100
    },
    textKode: {
        fontSize: 18,
        color: '#000000'
    },
    textNamaBarang:{
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    }


    
});

//make this component available to the app
export default DataBarang;
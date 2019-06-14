import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          nama:'',
          detail:'',
        };
    }
    
    render() {
        handleSubmit = event => {
            axios.post('http://mhs.rey1024.com/apibudaya/postCategory.php', {
                nama: this.state.nama,
                detail: this.state.detail
            })
                .then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                console.log(error);
            });
        }
            
        return (
            <View>
             <Header judul={"Warisan Budaya \n Tambah Budaya"} />
                <View style={styles.box1}>
                    <Text>Nama Budaya </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={nama => this.setState({ nama })}
                    />
                </View>
                <View style={styles.box1}>
                    <Text>Deskripsi Budaya </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={detail => this.setState({ detail })}
                    />
                </View>
                <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle} 	onPress={()=> handleSubmit()}>
                    <Text style={styles.buttonText}>Tambahkan Data</Text>
                </TouchableHighlight>

                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box1: {
        width: "90%",
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#2196F3"
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "orange",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: "45%",
        borderRadius: 5,
    },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
    },
});
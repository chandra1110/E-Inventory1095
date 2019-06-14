import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Image
} from "react-native";
import Header from "./Header";
const photokau = require("./img/pas1.jpg");
class Tentang extends Component {
     
    
   render() {
        return (
            <View style={styles.container}>
                <Header judul={"Tentang Kami"} />
                <View style={styles.bioContainer}>
                    <View style={styles.photoContainer}>
                        <Image source={photokau} style={styles.photo}/>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.textBio}>Nama : Chandra</Text>
                        <Text style={styles.textBio}>NIM : 1715051095</Text>
                        <Text style={styles.textBio}>Skills : - </Text>
                    </View>
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
    bioContainer : {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: 25,
        
    },
    photoContainer : {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    detailContainer : {
        flex: 0.6,
        justifyContent: 'center',
        marginLeft:25
    },
    photo:{
        width: 150,
        height: 200,
        // backgroundColor: '#005ff0',
        borderRadius: 10,
    },
    textBio:{
        fontSize: 15
    }



    
});
export default tentang;
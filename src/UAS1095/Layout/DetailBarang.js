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
const photokau = require("../img/cam1.png");


class Tentang extends Component {
    static navigationOptions = {
        header: null
    }

    render() {

        return (
            <View style={styles.container}>
                 <Header judul={"DETAIL BARANG"} />
                <View style={styles.bioContainer}>
                    <View style={styles.photoContainer}>
                        <Image source={photokau} style={styles.photo} />

                    </View>

                </View>
                <View style={styles.tulisan}>
                <Text style={styles.textBio}>Kode Barang     : LCD001</Text>
                <Text style={styles.textBio}>Nama Barang     : CAMERA</Text>
                <Text style={styles.textBio}>Produsen        : SONY</Text>
                <Text style={styles.textBio}>Stok            : 4</Text>
                </View>

                <View style={styles.boxButton}>

                    <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>UPDATE</Text>
                    </TouchableHighlight>

                    <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>HAPUS</Text>
                    </TouchableHighlight>
                
          </View>
                

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#66ff99"
    },
    box1: {
        flex: 0.3,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        //justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#66ff99",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: "90%",
        borderRadius: 5,
    },
    bioContainer: {
        //borderWidth: 1,

        marginTop: 40,
        //marginRight: 20,
        //marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    detailContainer: {
        flex: 0.6,
        justifyContent: 'center',
        marginLeft: 25,
        //justifyContent:'space-between'
    },
    photo: {
        width: 200,
        height: 200,
        // backgroundColor: '#005ff0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    textBio: {
        fontSize: 20,
        paddingTop: 20,
        borderColor: "black",
        textAlign: 'left',
        justifyContent:'flex-start'
    },
    text2: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center"

    },
    tulisan:{
       // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    textBio2:{
        fontSize: 40,
        paddingTop: 20,
        borderColor:"black",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    boxButton: {
        // borderWidth:1,
         marginLeft: 20,
         marginRight: 20,
         marginTop: 50,
         alignItems: "center",
         justifyContent:"center",
         flexDirection:"row",
         justifyContent:'space-between'
       },
       button2Style: {
        padding: 20,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#00ccff",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: 150,
        borderRadius: 5,

      },
      buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#fff",
        fontSize: 18
      },


});
export default Tentang;
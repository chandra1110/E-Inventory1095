import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Header from "./Header";
import Footer from "./Footer";

export default class Cuaca1 extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      		kode: '',
            jumlah: '',
            harga: '',
            total: null,
            hide: true,
            bayar: "",
            kembalian: "",
      
    };
  }

  render() {
    return (
    <View style={styles.containerMain}>

            <Header judul={"Program perhitungan \n Hallo"} />

      <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Tentang') }>
                    <Text style={styles.buttonText}>DATA2</Text>
                </TouchableHighlight>

         
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Tentang') }>
                    <Text style={styles.buttonText}>DATA2</Text>
                </TouchableHighlight>
 
            </View>

            <Footer judul={"Copyright @Chandra Wijayanti"} />
		</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#b3ffb3',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#009900',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"
   
  },

  box2: {
  
    backgroundColor: '#009900',
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },

buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "#ff751a",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "45%",
    borderRadius: 5,
  },
    button2Style: {
        //paddingTop: 20,
        //paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#ff751a",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: 300,
        borderRadius: 5
    },

textKota: { 
        textAlign: 'center', 
        paddingTop: 15, 
        fontSize: 20 ,
        color: 'black',
    },
    textInput: { 
        height: 40, 
        color: 'white', 
        borderWidth: 1, 
        borderColor: '#000',
        color: 'white' 
    }

});
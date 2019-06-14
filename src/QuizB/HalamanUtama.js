import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import Header from "./Header";


export default class HalamanUtama extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      	        jumlah: '',
                harga: '',
                jenis: '', 
                total: '',
                bayar: '',
                diskon:'',
                nama:'',
      
    };
  }

  render() {
    return (
    <View style={styles.containerMain}>

            <Header judul={"Quiz Aplikasi Mobile \n Chandra Wijayanti \n 1715051095"} />

      <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('AplikasiKasir') }>
                    <Text style={styles.buttonText}>Aplikasi Kasir</Text>
                </TouchableHighlight>

          
                
                <TextInput
                placeholder="Masukkan Nama"
                  style={styles.textInput}
                  onChangeText={nama => this.setState({ nama })}
                />
     
         
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} 
                onPress={()=> {
                             this.props.navigation.navigate('TentangSaya',  {nama: this.state.nama} 
                            )
                            
                 } }>;
                    <Text style={styles.buttonText}>Tentang Saya</Text>
                </TouchableHighlight>
 
            </View>
 
		</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    backgroundColor: '#ffffff',
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
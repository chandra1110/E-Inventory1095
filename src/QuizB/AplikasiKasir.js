import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,} from "react-native";
import Header from "./Header";
    
class AplikasiKasir extends Component {
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
          <ScrollView>
            <View style={styles.containerMain}>
              <Header judul={"Quiz Aplikasi Mobile \n Chandra Wijayanti \n 1715051095"} />
              <View style={styles.box1}>
                <Text>Jumlah Belanja</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={jumlah => this.setState({ jumlah })}
                />
              </View>
              <View style={styles.box1}>
                <Text>Harga Barang </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={harga => this.setState({ harga })}
                />
              </View>
              <View style={styles.box1}>
                <Text>Jenis Barang</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={jenis => this.setState({ jenis })}
                />
              </View>
              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                            onPress={() => {    
                              var total = this.state.jumlah * this.state.harga;
                              if (this.state.jenis==1){
                                  var diskon = (total * 0.05);
                                  
                              }else if(this.state.jenis==2){
                                  var diskon = (total * 0.07);
                                  
                              }else{
                                  var totalBaru = total;
                              }
                              var totalBaru = total - diskon;
                              this.setState({
                                  totalBaru : totalBaru,
                                  diskon : diskon 
                              }
                              );
                            }}
                >
                <View >
                  <Text style={styles.buttonText}>Hitung Total Belanja</Text>
                  </View>
                </TouchableHighlight>
              </View>
              
              <Text>Total Belanja anda adalah</Text>
              <Text>Diskon : Rp. {this.state.diskon}</Text>
              <Text>Bayar : Rp. {this.state.totalBaru}</Text>
            </View>
          </ScrollView>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems:'center',
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
    alignItems:'center',
    backgroundColor: "#ff751a",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: "45%",
    borderRadius: 5,
  },
  box1: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: "90%",
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"
  },
  box2: {
    backgroundColor: '#ffffff',
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems:'center',
  },
  textInput: {
    width: 170,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#880E4F"
  },
});
export default AplikasiKasir;
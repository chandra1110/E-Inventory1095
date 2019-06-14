import React, { Component } from "react";
import {View,Text,StyleSheet,TextInput,TouchableHighlight} from "react-native";
import Header from "./Header";

class Kurs extends Component {
    static navigationOptions = {
        header: null
    } 
    constructor(props) {
        super(props);
        this.state = {
            kode: '',
            rupiah: '',
            kurs: '',
        };
    }
    kurs= () => {
        let url = 'http://mhs.rey1024.com/uts/kurs.php?kode=+'+ this.state.kode +'&rupiah=+'+this.state.rupiah+'=metric';
        return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({
              kurs: responseJson.nilai,
            
          });
        }
        );
      }
    render() {
        return (
            <View style={styles.containerMain}>
                 <Header judul={"UTS Aplikasi Mobile \n Chandra Wijayanti \n 1715051095"} />
                <View style={styles.box1}>
                <Text>Kode Matauang: </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={kode => this.setState({ kode })}
                />
              </View>
              <View style={styles.box1}>
                <Text>Nilai Rupiah </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={rupiah => this.setState({ rupiah })}
                />
              </View>
              <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPressIn={() =>{
                                if(this.state.kode==1 || this.state.kode==2){
                                    this.kurs()
                                }else{
                                    this.setState({kurs:'Kode Salah'})
                                }
                            }}>
                <Text style={styles.Text}>Hitung Kurs</Text>
                </TouchableHighlight>
            </View>
                <View style={styles.box3}>
                <Text style={styles.Text}> Nilai Tukar : { this.state.kurs}</Text>
                </View>
            </View>

        );
    }
}
// define your styles
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        margin: 5,
        flexDirection: "column",
        alignItems: "center",
        marginTop:10,
        backgroundColor: 'white',
        paddingBottom:60,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#42bcf4",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: "45%",
        borderRadius: 5,
      },
    button2Style: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "orange",
        marginTop: 20,
        height: 60,
        width: 300,
        borderRadius: 5
      },
    box1: {
       // flex: 0.5,
        width: "90%",
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    box2: {
       // flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 120,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
    },
    box3: {
        //flex: 1,
        height: 150,
        width: 300,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "row",
        backgroundColor: "#42bcf4",
        alignItems: "center",
        justifyContent: "center",
    },
    box4: {
    //flex: 0.5,
    width: "100%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "space-between",
    flexDirection: "row"
    },
    Text:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 18,
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
});
export default Kurs;

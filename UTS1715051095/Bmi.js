import React, { Component } from "react";
import { View, 
        Text, 
        StyleSheet, 
        TouchableHighlight, 
        TextInput,   
    } from "react-native";

import Header from "./Header";
import Home from "./Home";
class Bmi extends Component {   
    static navigationOptions = {
        header: null
    } 
    constructor(props) {
        super(props);
        this.state = {
          
            tinggi: '',
            berat: '',
            bmi:null,
            keterangan:'',
        };
    }

    render() {
        const { navigation } = this.props;
        const nama = navigation.getParam('nama','nama kosong');
        return (
          
            <View style={styles.container}>
                 <Header judul={"UTS Aplikasi Mobile \n Chandra Wijayanti \n 1715051095"} />
             
              <View style={styles.box1}>
              <Text style={styles.text1}>Tinggi Badan</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={tinggi => this.setState({ tinggi })}
                />
              </View>
              <View style={styles.box1}>
              <Text style={styles.text1}>Berat Badan</Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={berat => this.setState({ berat })}
                />
              </View>
              
              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttons}
                  onPress={() => {    
                    let total = this.state.berat / (this.state.tinggi* this.state.tinggi);
                    this.setState({bmi:total});
                    if (total<18.5){
                        this.setState({keterangan:'Kekurangan Berat Badan'})
                    }
                    else if(total>=18.5 && total<25.0){
                        this.setState({keterangan:'Normal(IDEAL)'})
                    }
                    else if(total>=25.0 && total<30.0){
                        this.setState({keterangan:'Kelebihan Berat Badan'})
                    }
                    else if(total>=30.0){
                        this.setState({keterangan:'Kegemukan(OBESITAS)'})
                    }
                    else{
                        this.setState({keterangan:'Tidak Valid'}) 
                    }
                    
                  }}
                 >

            <Text style={styles.Text2}>Hitung BMI</Text>
            </TouchableHighlight>
              </View>
              <View style={styles.box3}>
              <Text style={styles.text3}>BMI: {this.state.bmi} </Text>
              <Text style={styles.text3}>{nama} {this.state.keterangan}</Text>   
                    
              
              </View>
              <View style={styles.box4}>
              <TouchableHighlight activeOpacity={0.1} style={styles.buttons1} onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.Text1}>Back</Text>
                </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.1} style={styles.buttons1} onPress={() => this.props.navigation.navigate('Kurs',)}>
                    <Text style={styles.Text1}>Cek Kurs</Text>
                </TouchableHighlight>
               
               </View>  
             
                       
            </View>            
          
          
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,        
        marginLeft: 5,
        marginRight: 5,
        flexDirection: "column",
        alignItems: "center"
    },
    Text2: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "white",
        fontSize: 20

    },
    text1: {
      fontSize: 16,
      textAlign: "left",
      justifyContent: 'flex-start',
      paddingTop: 12,
      fontWeight: 'bold'
    },
    text3: {
        fontSize: 16,
        textAlign: "left",
        justifyContent: 'flex-start',
        paddingTop: 12,
        fontWeight: 'bold'
      },
    buttons: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffa31a",
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        width: "50%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#fcfcfc",
    },
    buttons1: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffa31a",
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        height: 40,
        width: "47%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "#ffffff",
    },
    box1: {
        //flex: 0.1,
        width: "90%",
        paddingTop: 0,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
       
    },
    box2: {
        //flex: 0.1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
        
    },
    box3: {
       // flex: 0.15,
        width: "90%",
        paddingTop: 0,
        marginTop: 10,
        
        marginLeft: 2,
        justifyContent: "center",
        flexDirection: "column",
         backgroundColor:"#42bcf4",
       alignItems: "center"
    },
    box4: {
        //flex: 0.15,
        width: "90%",
        paddingTop: 10,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "center",
        flexDirection: "row",
      
       alignItems: "center"
    },
   
    Input: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#445660",
        borderRadius: 5,
        textAlign: "center"
    },    
});
export default Bmi;
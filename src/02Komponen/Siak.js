import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Siak extends React.Component {
  constructor (props){
    super(props)
    this.state= {
      tugas1:0,
      tugas2:0,
      nilaiAkhir:0,
      predikat:''
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
                <Text style={styles.textHeader}>
                  SIAK
                </Text>
          </View>
          <View style={styles.box1}>
              <View style={styles.box2}>
              <Text> Tugas 1 </Text>
              <TextInput
              keyboardType='numeric'
                style={styles.input}
                onChangeText = {
                  (tugas1) => this.setState({tugas1})
                }
              />
              </View>
              <View style={styles.box2}>
              <Text> Tugas 2 </Text>
              <TextInput
              keyboardType='numeric'
                style={styles.input}
                onChangeText = {
                  (tugas2) => this.setState({tugas2})
                }
              />
              </View>
              <View style={styles.boxButton}>        
                <TouchableHighlight style={styles.button}
                activeOpacity={0.5}
                underlayColor='white'
                onPress = { ()=> {
                    let nilaiAkhir=0.5*this.state.tugas1 + 0.5*this.state.tugas1;
                    this.setState({na:nilaiAkhir});
                    if (nilaiAkhir>=50)
                      this.setState({predikat:'Lulus'})
                    else {
                      this.setState({predikat:'Tidak Lulus'})
                    }
                  }
                }
                >
                  <Text style={styles.textButton}>Hitung Nilai Akhir</Text>
                </TouchableHighlight>
              </View>

          </View>

          <View style={styles.hasil}>
            <Text style={styles.textHasil}> Nilai Akhir = {this.state.na} </Text>
            <Text  style={styles.textHasil}> Predikat = {this.state.predikat} </Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    margin: 10,
    backgroundColor:'#bfddf2',
  },
  header: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4286f4',
  },
  textHeader :{
    fontSize: 30,
    color: "#fff"
  },
  box1: {
    marginTop:10,

  },
  box2: {
    marginTop:10,
    flexDirection: 'row'
  },
  input: {
    marginLeft: 30,
    width:200,
    borderColor:'#002560',
    borderWidth:1,
    height: 40,
    paddingLeft: 10 
  },
  button: {
    marginTop: 30,
    height: 50,
    backgroundColor : '#002560',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  boxButton:{
    alignItems: 'center',
    justifyContent: 'center'
   },
   textButton: {
     fontSize: 20,
     color: '#fff'
   },
   hasil: {
     flex: 4
   },
   textHasil: {
     fontSize: 20
   }
});
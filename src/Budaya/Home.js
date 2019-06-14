import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableHighlight,TextInput} from "react-native";
class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {nama: ''};
  }
    render() {
        return (
          <View style={styles.containerMain}>
                <Text>WARISAN BUDAYA</Text>
            <View style={styles.box3}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('ListBudaya')}>
                <Text style={styles.buttonText}>Lihat Budaya</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Tambahbudaya')}>
                <Text style={styles.buttonText}>Tambah Budaya</Text>
                </TouchableHighlight>

            </View>
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'column',
    marginTop:20,
    alignItems: "center",
    margin:5,
    backgroundColor: 'white',
  },
  image: {
    height: 150,
    width: 150
  },
  button2Style: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: "orange",
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    width: 300,
    borderRadius: 5
  },
  buttonText: {
    textAlign: "center",
    height: 40,
    width: "100%",
    marginTop: 10,
    color: "#FFFFFF",
    fontSize: 18
  },
  box2: {
    
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 120,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  textInput: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    height: 35,
    width: 160,
    marginTop: 18,
    borderRadius: 5,
  },
});
export default Home;
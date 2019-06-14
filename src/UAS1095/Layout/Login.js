import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TextInput,
  Platform,
  Alert
} from "react-native";

const photokau = require("../img/inventoryyyyy.png");

class Login extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  Login = () => {
    if (this.state.username==='cancan'&&this.state.password==='123') {
      this.props.navigation.navigate('Utama')
    } else {
      Alert.alert('Username dan password salah!');
    }

  };
  render() {
    return (
      <View style={styles.container}>

                <View style={styles.bioContainer}>
                    <View style={styles.photoContainer}>
                    <Text style={styles.textBio}>E-INVENTORY</Text>
                        <Image source={photokau} style={styles.photo}/>
                    </View>
                </View>
        
        <View style={styles.box1}>
          <View style={styles.textInput} >
            <TextInput
              placeholder="Masukan Username"
              onChangeText={username => this.setState({ username })}
            />
          </View>
          <View style={styles.textInput} >
            <TextInput
            secureTextEntry={true}
              placeholder="Masukan Password"
              onChangeText={password => this.setState({ password })}
            />
          </View>
          <View style={styles.boxButton}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('DaftarBarang')}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Tentang')}>
                    <Text style={styles.buttonText}>ABOUT</Text>
                </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: 10,
    alignItems: "center",
    backgroundColor: "#66ff99"
  },
  headerBar: {
    backgroundColor: "#FF0066",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative"
  },
  headerText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center"
  },
  button2Style: {
    padding: 20,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#00ccff",
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
    color: "#fff",
    fontSize: 18
  },
  box1: {
    flex: 0.5,
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "space-between",
  },
  box2: {
    flex: 0.5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    alignItems: "center",
    width: "90%",
  },
  textInput: {
    borderWidth: 1,
    margin: 20,
    width: "90%",
    paddingLeft: 10,

  },
  photoContainer : {
    //flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
},
photo:{
    width: 300,
    height: 300,
    // backgroundColor: '#005ff0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
},
textBio:{
    fontSize: 40,
    paddingTop: 20,
    borderColor:"black",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
},
boxButton: {
   // borderWidth:1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    alignItems: "center",
    justifyContent:"center"

  },
});
export default Login;
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert, Image
} from "react-native";

const photokau = require("../img/inventoryyyyy.png");
const axios = require("axios");

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
   
    const { navigation } = this.props;
    handleSubmit = event => {
      axios
        .post("https://chandra1095.000webhostapp.com/login.php", {
          username: this.state.username,
          password: this.state.password
        })
        .then(function(response) {
          console.log(response);
          console.log("ini kode user", response.data.kode_user);
          if (response.data.username == "chan") {
             navigation.navigate("DaftarBarang", {
               kode_user: response.data.kode_user
             });
          } else {
            Alert.alert(response.data.pesan);
          }
        });
    };
    return (

      <View style={styles.container}>
       
       <View style={styles.bioContainer}>
                    <View style={styles.photoContainer}>
                    <Text style={styles.textBio}>E-INVENTORY</Text>
                        <Image source={photokau} style={styles.photo}/>
                    </View>
                </View>

        <View style={styles.box1}>
          <TextInput
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Kata Sandi"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            style={styles.textInput}
          />
        </View>
        <View style={styles.box2}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button2Style}
            onPress={handleSubmit.bind(this)}
          >
            <Text style={styles.text}>Masuk</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button2Style}
            onPress={() => this.props.navigation.navigate('Tentang')}
          >
            <Text style={styles.text}>Tentang</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#66ff99"
  },
   box1: {
    //flex: 0.5,
    width: "90%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    marginBottom:80
    //justifyContent: "space-between",
  },
  box2: {
    justifyContent: "center",
    height: 60,
    marginLeft: 20,
    marginRight: 20
  },
  button2Style: {
   // padding: 20,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: "#00ccff",
  
    marginBottom: 5,
    height: 60,
    width: 300,
    borderRadius: 5
  },
  textInput: {
    borderWidth: 1,
    justifyContent: "center",
    height: 45,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonStyle: {
    //paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#2196F3",
    marginBottom: 20,
    height: 45,
    borderRadius: 5,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 20
  },
  textBio:{
    fontSize: 40,
    paddingTop: 20,
    borderColor:"black",
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}
  
});
export default Login;

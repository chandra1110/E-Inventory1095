import React, { Component } from "react";
import { 
      View, 
      Text, 
      StyleSheet, 
      Image, 
      TouchableHighlight, 
      TextInput
    } from "react-native";
import Header from "./Header";

class Home extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
      super(props);
      this.state = {
        
          nama: null,
        
      };
  }
    render() {
        return (
          <View style={styles.container}>
                <Header judul={"UTS Aplikasi Mobile \n Chandra Wijayanti \n 1715051095"} />
            <View style={styles.box2}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: "http://rey1024.com/undiksha.png"}} />
              </View>
            </View>
            <View style={styles.box1}>
            <Text style={styles.Text2}>Nama   </Text>
                <TextInput
                  style={styles.Input}
                  onChangeText={nama => this.setState({ nama })}
                />
               
            </View>
            <View style={styles.box3}>
            <TouchableHighlight activeOpacity={0.1} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Bmi', {nama: this.state.nama})}>
                    <Text style={styles.Text1}>Hitung BMI</Text>
                </TouchableHighlight>

                    <TouchableHighlight activeOpacity={0.1} style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('TentangSaya')}>
                    <Text style={styles.Text1}>Tentang Saya</Text>
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
  FooterBar: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative",
    borderRadius: 2,
    width: "100%",
    borderWidth: 3,
    borderColor: "#445660",
  },
  imageContainer: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingBottom: 20,
    paddingTop: 20,
    position: "relative"
  },
    image: {
      width: 170,
      height: 170,
        
    },
  FooterText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontWeight: 'bold'
  },
  buttonatas: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    backgroundColor: "#445660",
    marginTop: 20,
    height: 60,
    width: "48%",
    borderRadius: 8,
    borderWidth: 3,
    borderColor: "#b80000",
  },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#ffa31a",
        marginTop: 7,
        marginBottom: 40,
        height: 60,
        width: 300,
        borderRadius: 8,
        borderWidth: 3,
        borderColor: "#fcfcfc",
    },
    Text1: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 18
    },
  box1: {
    //flex: 0.5,
    width: "100%",
    paddingTop: 20,
    marginTop: 10,
    marginLeft: 2,
    justifyContent: "center",
    flexDirection: "row"
  },
  box2: {
    //flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center"
  },
  box3: {
      //flex: 1,
      marginLeft: 10,
      marginRight: 10,     
      marginBottom: 120,
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center"
  },
  Input: {
   
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#445660",
    borderRadius: 5,
    textAlign: "center"
},    
Text2: {
  textAlign: "center",
  height: 40,
  
  marginTop: 4,
  color: "black",
  fontSize: 18
},
});
export default Home;
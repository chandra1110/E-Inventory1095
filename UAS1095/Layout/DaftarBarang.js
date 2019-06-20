import React from 'react';
import { View, FlatList, ScrollView, StyleSheet, Text, TouchableHighlight} from 'react-native'
import { ListItem } from 'react-native-elements'
import Header from "./Header";
const photokau = require("../img/cam1.png");


const axios = require('axios');
export default class DaftarBarang extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      kodeBarang: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://chandra1095.000webhostapp.com/getBarang.php"
      )
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      
      <View style={styles.container}>
        <Header judul={"DAFTAR BARANG"} />
        
        <View style={styles.bioContainer}>
          <View style={styles.photoContainer}>


          </View>
        </View>

        <View>


          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem style={styles.list}onPress={() => this.props.navigation.navigate("DetailBarang",{kodeBarang:item.kodeBarang})}
                title={item.namaBarang}
                leftAvatar={{
                  source: { uri: "https://chandra1095.000webhostapp.com/uploads/"+item.foto },
                }}
              />

            )}
          />
        </View>

        <View style={styles.boxButton}>
          <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={() => this.props.navigation.navigate('Tambah')}>
            <Text style={styles.buttonText}>TAMBAH</Text>
          </TouchableHighlight>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin: 10,
    //alignItems: "center",
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
    alignItems: 'center',
    backgroundColor: "#00ccff",
    marginTop: 100,
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

    list: {
        marginTop: 10,
       
       // marginRight: 10
    },

  photoContainer: {
    //flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  photo: {
    width: 300,
    height: 300,
    // backgroundColor: '#005ff0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  textBio: {
    fontSize: 40,
    paddingTop: 20,
    borderColor: "black",
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
    justifyContent: "center"

  },
});
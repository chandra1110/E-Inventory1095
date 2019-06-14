import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  Modal,
  Alert
} from "react-native";

const axios = require("axios");
import Header from "./Header";

class Tambah extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
        kodeBarang: "",
        namaBarang: "",
        produse:"",
        stok:"",
        foto:"",
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header judul={"TAMBAH BARANG"} />
        <View style={styles.box1}>
          <TouchableOpacity >
            <View style={styles.image}>
              {this.state.srcImg === null ? null : (
                <Image source={this.state.srcImg} style={styles.image} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.box2}>
            <View style={styles.box5}>
              <TextInput
                placeholder="Upload Foto"
                onChangeText={kodeBarang => this.setState({ kodeBarang })}
                value={this.state.kodeBarang}
                style={styles.textInput2}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.tombol}

              >

                <Text style={styles.text2}>Upload</Text>
              </TouchableOpacity>
            </View>
            
            <TextInput
              placeholder="KODE BARANG"
              onChangeText={kodeBarang => this.setState({ kodeBarang })}
              style={styles.textInput}
            />
            <TextInput
              placeholder="NAMA BARANG"
              onChangeText={namaBarang => this.setState({ namaBarang })}
              style={styles.textInput}
            />
           
            <TextInput
              placeholder="STOK"
              onChangeText={stok_obat => this.setState({ stok_obat })}
              style={styles.textInput}
            />
            
          </View>
        </ScrollView>
        <View style={styles.box6}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => this.submit()}
          >
            <Text style={styles.text2}>SIMPAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => this.submit()}
          >
            <Text style={styles.text2}>KEMBALI</Text>
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
    backgroundColor: "#66ff99"
  },
  box1: {
    //borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  box2: {
    //borderWidth: 1,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    height: 300
  },
  box3: {
    //borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 3
  },
  box4: {
    //borderWidth: 1,
    marginLeft: 70,
    marginRight: 70,
    paddingBottom: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonStyle: {
    backgroundColor: "#00ccff",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 100
  },
  deleteStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    width: 100,
    flexDirection: "row",
    paddingLeft: 10
  },
  text: {
    fontSize: 20
  },
  text2: {
    fontSize: 18,
    color: "black"
  },
  image: {
    width: 150,
    height: 150,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  profile: {
    //borderWidth: 1,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    color:  "#F08080",
    fontSize: 20
  },
  textInput: {
    borderWidth: 1,
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  textInput2: {
    borderWidth: 1,
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    width: 210,
    marginRight: 10
  },
  box5: {
    //borderWidth: 1,
    flexDirection: "row"
  },
  tombol: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#00ccff",
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    width: 80,
    flexDirection: "row",
    paddingLeft: 10
  },
  box6: {
    //borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    flexDirection:"row",
    justifyContent:"space-between"
  }
});
export default Tambah;

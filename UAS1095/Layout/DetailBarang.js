import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    Alert
} from "react-native";
import Header from "./Header";
const photokau = require("../img/cam1.png");
import { Icon, Card, Divider } from "react-native-elements";
const axios = require("axios");

class DetailBarang extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          kodeBarang: this.props.navigation.state.params.kodeBarang
        };
      }
      componentDidMount() {
        axios
          .get(
            "https://chandra1095.000webhostapp.com/getDetail.php?kodeBarang=" +
              this.state.kodeBarang
          )
          .then(response => {
            console.log(response.data);
            this.setState({ data: response.data });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
          });
      }
    

    render() {

            return (
                <View style={styles.container}>
                  <Header judul={"Detail Barang"} />
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                      
                      <View style={styles.box1}>
                        <View style={styles.image}>
                          <Image
                            source={{
                              uri:
                                "https://chandra1095.000webhostapp.com/uploads/" +
                                item.foto
                            }}
                            style={styles.image}
                          />
                        </View>
                      </View>
                    )}
                  />
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => (
                      <View>
                      <View style={styles.box2}>
                        <Text style={styles.profile}>Detail Barang</Text>
                        <View style={styles.box3} />
                        <View style={styles.box3}>
                          <Text>Kode Barang </Text>
                          <Text> {item.kodeBarang}</Text>
                        </View>
                        <View style={styles.box3}>
                          <Text>Nama Barang </Text>
                          <Text> {item.namaBarang}</Text>
                        </View>
                        <View style={styles.box3}>
                          <Text>Produsen  </Text>
                          <Text> {item.produsen}</Text>
                        </View>
                        <View style={styles.box3}>
                          <Text>stok</Text>
                          <Text> {item.stok}</Text>
                        </View>
                        
                      </View>
                       <View style={styles.box4}>
                       <TouchableOpacity
                         activeOpacity={0.5}
                         style={styles.buttonStyle}
                         onPress={() =>
                           this.props.navigation.navigate("Update", {kodeBarang:item.kodeBarang
                           })
                         }
                       >
                         
                         <Text style={styles.text2}>Update</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                         activeOpacity={0.5}
                         style={styles.deleteStyle}
                         onPress={() => {
                           Alert.alert(
                             "Peringatan!",
                             "Yakin Menghapus Barang  " + this.state.data[0].namaBarang + " ?",
                             [
                               {
                                 text: "Batal",
                                 onPress: () => console.log("Cancel ditekan"),
                                 style: "cancel"
                               },
                               {
                                 text: "OK",
                                 onPress: () =>
                                   {
                                     axios
                                       .post(
                                         "https://chandra1095.000webhostapp.com/hapusBarang.php",
                                         {
                                           kodeBarang: this.state
                                             .kodeBarang
                                         }
                                       )
                                       .then(response => {
                                         console.log(
                                           "Status  " + response
                                         );
                                         console.log(response);
                                         this.props.navigation.navigate('DaftarBarang');
                                       })
                                       .catch(function(error) {
                                         console.log(error);
                                       });
                                   }
                               }
                             ],
                             { cancelable: true }
                           );
                         }}
                       >
                        
                         <Text style={styles.text2}>Hapus</Text>
                       </TouchableOpacity>
   
   
                     </View>
                     </View>
                    )}
                  />
          
                 
                </View>

                
   );
}
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#66ff99"
    },
    box1: {
        flex: 0.3,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        //justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#66ff99",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: "90%",
        borderRadius: 5,
    },
    bioContainer: {
        //borderWidth: 1,

        marginTop: 40,
        //marginRight: 20,
        //marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    detailContainer: {
        flex: 0.6,
        justifyContent: 'center',
        marginLeft: 25,
        //justifyContent:'space-between'
    },
    photo: {
        width: 200,
        height: 200,
        // backgroundColor: '#005ff0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20,
    },
    textBio: {
        fontSize: 20,
        paddingTop: 20,
        borderColor: "black",
        textAlign: 'left',
        justifyContent:'flex-start'
    },
    text2: {
        fontSize: 25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center"

    },
    tulisan:{
       // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    textBio2:{
        fontSize: 40,
        paddingTop: 20,
        borderColor:"black",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    boxButton: {
        // borderWidth:1,
         marginLeft: 20,
         marginRight: 20,
         marginTop: 50,
         alignItems: "center",
         justifyContent:"center",
         flexDirection:"row",
         justifyContent:'space-between'
       },
       button2Style: {
        padding: 20,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#00ccff",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: 150,
        borderRadius: 5,

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
        //borderWidth: 1,
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20
      },
      box2: {
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        height: 250
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
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#2196F3",
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        width: 100,
        flexDirection: "row",
        paddingLeft: 10
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
        color: "#fff"
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
        color: "#2196F3",
        fontSize: 20
      }


});
export default DetailBarang;
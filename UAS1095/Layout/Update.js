import React from 'react';
import { StyleSheet,Text ,View,TextInput,TouchableHighlight,Image,FlatList, } from 'react-native';
import Header from "./Header";

const axios = require('axios');
class Update extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          kodeBarang:this.props.navigation.state.params.kodeBarang,
          namaBarang:'',
          produsen:'',
          stok:'',
          kodeDetail:'',
        };
    }


    componentDidMount(){ 
      axios.get("https://chandra1095.000webhostapp.com/getDetail.php?kodeBarang="+ this.state.kodeBarang )
      .then((response)=>{ 
      console.log(response.data); 
      this.setState({ data:response.data }); 
      }) 
      .catch(function (error) { 
          console.log(error); 
      }); 
  } 
  
    render() {
      handleSubmit = () => {
        axios.post('https://chandra1095.000webhostapp.com/updateBarang.php', {
          kodeBarang: this.state.kodeBarang,
          namaBarang: this.state.namaBarang,
          produsen: this.state.produsen,
          stok: this.state.stok,
          kodeDetail: this.state.kodeDetail,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
        return (
            <View style={styles.containerMain}>
            <Header judul={"Update Barang"} />
           <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={({ item }) => ( 
        <View style={styles.box3}>           
        <View style={styles.box1}>
        <Text style={styles.Text}>Kode Barang </Text>
            <TextInput
                placeholder={item.kodeBarang} 
                style={styles.textInput}
                onChangeText={kodeBarang => this.setState({ kodeBarang })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Nama Barang </Text>
            <TextInput
                placeholder={item.namaBarang} 
                style={styles.textInput}
                onChangeText={namaBarang => this.setState({ namaBarang })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Produsen </Text>
            <TextInput
                placeholder={item.produsen} 
                style={styles.textInput}
                onChangeText={produsen => this.setState({ produsen })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Stok</Text>
            <TextInput
                placeholder={item.stok} 
                style={styles.textInput}
                onChangeText={stok => this.setState({ stok })}
            />
        </View>

        <View style={styles.box1}>
        <Text style={styles.Text}>Kode Detail </Text>
            <TextInput
                placeholder={item.kodeDetail} 
                style={styles.textInput}
                onChangeText={kodeDetail => this.setState({ kodeDetail })}
            />
        </View>
        </View>
            )} 
               /> 
                <View style={styles.box2}>
                <TouchableHighlight activeOpacity={0.5} style={styles.buttonStyle}  onPress={()=> handleSubmit()}>
                    <Text style={styles.buttonText}>SAVE</Text>
                </TouchableHighlight>
                </View>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center",
        backgroundColor: "#66ff99"

    },
    box1: {
        width: "90%",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textInput: {
        width: 270,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
    buttonStyle: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        backgroundColor: "#00ccff",
        marginBottom: 20,
        height: 40,
        width: "45%",
        borderRadius: 5,
    },
    buttonText:{
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 17,
      },
    box2: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        },
      box3: {
          width: "100%",
          paddingTop: 100,
          marginLeft: 2,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          textAlign: 'center'
        },
        Text:{
          textAlign: "center",
          marginTop: 10,
          color: "#FFFFFF",
          fontSize: 13,
        },
    image:{
        width: 150,
        height: 150,
        marginTop: 2,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    uploadFoto:{
        width: 150,
        height: 150,
        marginTop: 10,
        borderColor: "#fff",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
export default Update;
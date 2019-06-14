import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView,
    Image
} from "react-native";
import Header from "./Header";
const photokau = require("./img/pas1.jpg");


class TentangSaya extends Component {
  constructor(props){
      super (props);
      this.state= {
          nama: "",
      };
  }    
    
   render() {
       const {navigation} = this.props;
       const nama = navigation.getParam('nama','nama kosong');
      

        return (
            <View style={styles.container}>
                <Header judul={"Quiz Aplikasi Mobile \n Chandra Wijayanti \n 1715051095"} />
                <View style={styles.bioContainer}>
                    <View style={styles.photoContainer}>
                        <Image source={photokau} style={styles.photo}/>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={styles.textBio}>Nama :{ nama }</Text>
                        <Text style={styles.textBio}>Tgl Lahir : 11 Oktober 1999</Text>
                        <Text style={styles.textBio}>Alamat : Desa Sangket </Text>
                    </View>
                </View>

                <View style={styles.box1}>
                    <Text style={styles.text2}>SUKSES</Text>
                </View>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    box1: {
        flex: 0.3,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: "#ff751a",
        marginTop: 20,
        marginBottom: 20,
        height: 60,
        width: "90%",
        borderRadius: 5,
      },
    bioContainer : {
        flex: 0.5,
        flexDirection: 'row',
        marginTop: 25,
        
    },
    photoContainer : {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    detailContainer : {
        flex: 0.6,
        justifyContent: 'center',
        marginLeft:25,
        justifyContent:'space-between'
    },
    photo:{
        width: 150,
        height: 200,
        // backgroundColor: '#005ff0',
        borderRadius: 10,
    },
    textBio:{
        fontSize: 15
    },
    text2:{
        fontSize:25,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center"

    }



    
});
export default TentangSaya;
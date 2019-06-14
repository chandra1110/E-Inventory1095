import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ScrollView
} from "react-native";
import Header from "./Header";
class Kasir extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            kode: '',
            jumlah: '',
            harga: '',
            total: null,
            hide: true,
            bayar: "",
            kembalian: "",
        };
    }
    


    kembali = () => {
        let kembalian = this.state.bayar - this.state.total;
        this.setState({
            kembalian: kembalian,
        });
    }
    render() {
        return (
          <ScrollView>
            <View style={styles.container}>
              <Header judul="Penjualan" />
              <View style={styles.box1}>
                <Text>Kode Barang</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={kode => this.setState({ kode })}
                />
              </View>
              <View style={styles.box1}>
                <Text>Jumlah Beli </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={jumlah => this.setState({ jumlah })}
                  keyboardType ='numeric'
                />
              </View>
              <View style={styles.box1}>
                <Text>Harga Barang </Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={harga => this.setState({ harga })}
                  keyboardType ='numeric'
                />
              </View>
              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                            onPress={() => {
                                this.setState({
                                    total : this.state.jumlah * this.state.harga
                                }
                                );
                            }}
                >
                  <Text style={styles.buttonText}>Hitung Total</Text>
                </TouchableHighlight>
              </View>
              <Text>Total Belanja adalah Rp. {this.state.total}</Text>

              <View style={styles.box1}>
                <Text>Uang Bayar</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={bayar => this.setState({ bayar })}
                  keyboardType ='numeric'
                />
              </View>
              <View style={styles.box2}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                            onPress={() => {
                                this.setState({
                                    kembalian : this.state.bayar - this.state.total
                                });
                            }}
                >
                  <Text style={styles.buttonText}>
                    Hitung Kembalian
                  </Text>
                </TouchableHighlight>
              </View>
              <Text>Kembalian adalah Rp. {this.state.kembalian}</Text>
            </View>
          </ScrollView>
        );
    }
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection: "column",
        alignItems: "center"
    },
    buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 20
    },
    buttonStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#096bba",
        marginTop: 20,
        marginBottom: 20,
        height: 40,
        width: "100%",
    },
    box1: {
        flex: 0.5,
        width: "90%",
        paddingTop: 20,
        marginTop: 10,
        marginLeft: 2,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    box2: {
        flex: 0.4,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    textInput: {
        width: 170,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#096bba"
    },
});
export default Kasir;

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';



const Header = (props) => {
    return (
        <View style={styles.headerBar}>
            <Text style={styles.headerText}> {props.judul} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: "#42bcf4",
        justifyContent: "center",
        alignItems: "center",
        //paddingLeft: 100,
        //paddingRight: 100,
        paddingBottom: 10,
        paddingTop: 10,
        position: "relative",
        height: 80,
        width: "100%",
    },
    headerText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center"
    },

});
export default Header;

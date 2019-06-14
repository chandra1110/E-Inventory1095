import React from 'react';
import { StyleSheet, Text,TextInput, View, Button} from 'react-native';
export default class VolKelBalok extends React.Component {
render() {
return (
    <View style={styles.vMain} >
        <View style={styles.vHeader}>
        <Text style={styles.txtHeader1}>Menghitung Volume Keliling Balok</Text>
        <Text style={styles.txtHeader2}>Chandra Wijayanti</Text>
    </View>

    <View style={styles.vInput}>
        <View style={styles.vItemInput}>
        <Text style={styles.txtLabelInput}>Panjang</Text>
        <TextInput style={styles.txtInput}
        keyboardType = 'numeric'/>
    </View>

    <View style={styles.vItemInput}>
        <Text style={styles.txtLabelInput}>Lebar</Text>
        <TextInput style={styles.txtInput}
        keyboardType = 'numeric'/>
    </View>

    <View style={styles.vItemInput}>
        <Text style={styles.txtLabelInput}>Tinggi</Text>
        <TextInput style={styles.txtInput}
        keyboardType = 'numeric'/>
    </View>
<View style={styles.vItemButton}>
<Button
color="#0D47A1"
onPress={() => {}}
title="Hitung"
accessibilityLabel="Hitung"/>
</View>
</View>
    <View style={styles.vHasil}>
    <View style={styles.vItemHasil}>
    <View style={styles.vTxtLabelHasil}>
    <Text style={styles.txtLabelHasil}>Keliling</Text>
</View>
<View style={styles.vTxtHasil}>
    <Text style={styles.txtHasil}>50</Text>
</View>
</View>
    <View style={styles.vItemHasil}>
    <View style={styles.vTxtLabelHasil}>
    <Text style={styles.txtLabelHasil}>Volume</Text>
</View>

<View style={styles.vTxtHasil}>
    <Text style={styles.txtHasil}>1000</Text>
</View>
</View>
</View>
    <View style={styles.vFooter}>
    <Text style={styles.txtFooter}>@2019 Rey1024</Text>
</View>
</View>
);
}
}
const styles = StyleSheet.create({
vMain: {
flex:1
},
vHeader: {
flex:2,
backgroundColor:'#0D47A1',
alignItems:'center',
justifyContent:'center'
},
txtHeader1: {
color:'#fff',
fontSize:20
},
txtHeader2: {
    color:'#E3F2FD',
    fontSize:16
    },
    vInput: {
    flex:3,
    backgroundColor:'#E3F2FD',
    justifyContent:'flex-start'
    },
    vItemInput: {
    flex:1,
    flexDirection:'row',
    margin:10
    },
    vItemButton: {
    flex:2,
    margin:10
    },
    txtLabelInput: {
    flex:2,
    height: 30
    },
    txtInput: {
    flex:3,
    height: 30,
    backgroundColor:'#fff',
    borderColor: 'gray',
    borderWidth: 1
    },
    vHasil: {
    flex:6,
    flexDirection:'row'
    },
    vItemHasil: {
    flex:1,
    flexDirection:'column',
    margin:10,
    backgroundColor:'#fff',
    borderColor: 'gray',
    borderWidth: 1
    },
    vTxtLabelHasil:
    {
    flex:1,
    backgroundColor:'#1565C0',
    alignItems:'center',
    justifyContent:'center'
    },
    txtLabelHasil:
    {
    color:'#ffff',
    fontSize:20
    },
    vTxtHasil:
    {
    flex:5,
    backgroundColor:'#ffff',
    alignItems:'center',
justifyContent:'center'
},
txtHasil:
{
fontSize:60
},
vFooter:
{
flex:1,
borderColor:'gray',
borderWidth:1,
backgroundColor:'#42A5F5',
alignItems:'center',
justifyContent:'center'
},
txtFooter:
{
fontWeight: "bold"
}
});
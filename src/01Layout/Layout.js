import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Layout extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.BoxHeader}>
          <Text style={styles.textHeader}>Pendidikan Teknik Informatika</Text>
      </View>

      <View style={styles.box2}>
      <Image
      style={styles.gambar}
      source={{uri: "http://undiksha.ac.id/wp-content/uploads/2016/12/undiksha-1024x683.jpg"}}
      reziseMode="cover"/>
      </View>

      <View style={styles.box3}>
        <View style={styles.Box}><Text>1</Text></View>
        <View style={styles.Box}><Text>2</Text></View>
        <View style={styles.Box}><Text>3</Text></View>
        <View style={styles.Box}><Text>4</Text></View> 
      </View>

      <View style={styles.box4}>
        <View style={styles.Box}><Text>5</Text></View>
        <View style={styles.Box}><Text>6</Text></View>
        <View style={styles.Box}><Text>7</Text></View>
        <View style={styles.Box}><Text>8</Text></View> 
      </View>
      <View style={styles.box5}>
          <Text style={styles.text3}>#JaenKuliahdiPTI</Text>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#b3d9ff',
    flex: 1,
    flexDirection: 'column'
  },
  BoxHeader: {
    flex: 0.7,
    backgroundColor: '#0059b3',
  },
  box2: {
    flex: 1,
    backgroundColor: '#4d94ff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }, 
  box3: {
    flex: 0.7,
    backgroundColor: '#99c2ff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#99c2ff',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#0059b3',
    margin: 10,
   
  },
  Box: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  textHeader : { 
  textAlign: 'center', 
  color: 'white', 
  padding: 30, 
  fontSize: 17 
},
text2:{
textAlign: 'center',
padding: 30, 
fontSize: 30
},
text3:{
  textAlign: 'center', 
  color: 'white',
  padding: 30, 
  fontSize: 25 
},
gambar: {
width: '100%',
height: '100%'
 
  }
});
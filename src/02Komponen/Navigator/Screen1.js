import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Screen1 extends React.Component {
render() {
return (
<View style={styles.container}>
<Text> Layar 1</Text>
</View>
);
}
}
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
});
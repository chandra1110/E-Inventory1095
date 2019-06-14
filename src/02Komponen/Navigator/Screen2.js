import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Screen2 extends React.Component {
render() {
return (
<View style={styles.container}>
<Text> Layar 2</Text>
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
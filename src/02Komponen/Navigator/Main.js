import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
export default class Main extends React.Component {
render() {
    return (
    <View style={styles.container}>
        <View style={styles.vHeader}>
        <Text style={styles.txtHeader}>Layar Utama</Text>
    </View>

    <View style={styles.vButton}>
    <Button
        color="green"
        onPress={() => this.props.navigation.navigate('Layar1')}
        title="Layar 1"
        accessibilityLabel="Layar 1"
    />
    </View>

<View style={styles.vButton}>
    <Button
        color="blue"
        onPress={() => this.props.navigation.navigate('Layar2')}
        title="Layar 2"
        accessibilityLabel="Layar 2"
    />
    </View>
    </View>
);
}
}



const styles = StyleSheet.create({
    container: {
    flex: 1
    },
vHeader: {
    alignItems:'center',
    justifyContent:'center'
    },
txtHeader: {
    fontSize:30
},
vButton: {
    margin:10
}
});
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HelloWord extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Persiapan Quiz</Text>
        
      </View>
      );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99bbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


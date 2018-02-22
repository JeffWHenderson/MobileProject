import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bananas from './components/Bananas'

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Bananas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

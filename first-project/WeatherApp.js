import WeatherProject from '..WeatherApp';
export default WeatherApp;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: ''};
  }
  render() {
    return (
      <Text style={styles.welcome}>
        You input {this.state.zip}.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

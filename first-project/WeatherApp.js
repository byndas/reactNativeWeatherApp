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
});

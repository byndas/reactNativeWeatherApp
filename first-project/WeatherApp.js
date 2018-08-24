import WeatherProject from '..WeatherApp';

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: ''};
    _handleTextChange = event => {
      this.setState({ zip: event.nativeEvent.text });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You input {this.state.zip}.
        </Text>
        <TextInput 
          style={styles.input}
          onSubmitEditing={this._handleTextChange}
        />
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
  },
});

export default WeatherApp;
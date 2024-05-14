import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import {View} from 'react-native';
import Task23 from '../Task23';

class MyClassComponent extends Component {
  state = {
    text: 'Hello From MyClassComponent',
  };

  handleTextChange = newText => {
    this.setState({text: newText});
  };

  render() {
    return (
      <View>
        <TextInput onChangeText={this.handleTextChange}></TextInput>
        <Task23 text={this.state.text} />
      </View>
    );
  }
}

export default MyClassComponent;

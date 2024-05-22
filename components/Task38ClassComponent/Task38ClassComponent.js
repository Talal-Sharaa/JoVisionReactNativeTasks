import React, { Component } from 'react';
import { Text } from 'react-native';
import TextContext  from '../Task38/TextContext';

class Task38ClassComponent extends Component {
  // Assign the context type
  static contextType = TextContext;

  render() {
    const { text } = this.context;
    return <Text style={{backgroundColor:'blue'}}>{text}</Text>;
  }
}

export default Task38ClassComponent;
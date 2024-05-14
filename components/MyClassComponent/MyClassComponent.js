import React, {Component, forwardRef} from 'react';
import {View, Text} from 'react-native';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
    this.setNewText = this.setNewText.bind(this);
  }
  setNewText(newText) {
    this.setState({text: newText});
  }

  render() {
    return (
      <View>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default MyClassComponent;

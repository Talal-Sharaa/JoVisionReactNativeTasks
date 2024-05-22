/*
=============================================
Task20 MyclassComponent
=============================================

import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MyClassComponent extends Component {
  componentDidMount() {
    console.log('MyClassComponent mounted');
  }
  componentWillUnmount() {
    console.log('MyclassComponent unmounted');
  }
render() {
    return (
      <View>
        <Text>Hello From MyClassComponent</Text>
      </View>
    );
  }
}

export default MyClassComponent;
*/
/*
=========================================
Task23 MyClassComponent
=========================================

import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import Task23 from '../Task23';
export default class MyClassComponent extends Component {
  state = {
    text: 'Hello World',
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="MyClassComponent"
          onChangeText={text => this.setState({text})}
        />
        <Task23 text={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
*/
/*
=============================================
Task25 MyClassComponent
=============================================
import React, {Component, forwardRef} from 'react';
import {View, Text} from 'react-native';

class MyClassComponent extends Component {
  componentDidMount() {
    console.log('MyClassComponent mounted');
  }
  componentWillUnmount() {
    console.log('MyclassComponent unmounted');
  }
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
*/

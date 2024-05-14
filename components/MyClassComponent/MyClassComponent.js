import React, {Component} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
class MyClassComponent extends Component {
  componentDidMount() {
    console.log('Component Mounted');
  }
  componentWillUnmount() {
    console.log('Component Unmounted');
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

import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native';
import MyClassComponent from '../MyClassComponent';
export default class Task20 extends Component {
  state = {
    showComponent: false,
    titleText: 'Show Component',
  };

  render() {
    return (
      <View>
        <Button
          title={this.state.titleText}
          onPress={() => {
            this.setState({
              showComponent: !this.state.showComponent,
              titleText: this.state.showComponent
                ? 'Show Component'
                : 'Hide Component',
            });
          }}></Button>
        {this.state.showComponent && <MyClassComponent />}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

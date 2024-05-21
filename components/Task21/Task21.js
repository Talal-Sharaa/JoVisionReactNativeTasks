import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native';
import MyFunctionPage from '../MyFunctionPage';
export default class Task21 extends Component {
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
        {this.state.showComponent && <MyFunctionPage />}
      </View>
    );
  }
}

const styles = StyleSheet.create({});


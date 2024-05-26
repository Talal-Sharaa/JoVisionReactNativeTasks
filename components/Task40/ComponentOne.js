import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setText } from './store';

class ComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.savedText || '',
    };
  }

  handleChangeText = (text) => {
    this.setState({ text });
    this.props.setText(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          onChangeText={this.handleChangeText}
          placeholder="Type something..."
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const mapDispatchToProps = {
  setText,
};

export default connect(null, mapDispatchToProps)(ComponentOne);

import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setText } from './store';
import ComponentOne from './ComponentOne';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    if (this.state.showComponent) {
      this.props.setText('');
    }
    this.setState((prevState) => ({ showComponent: !prevState.showComponent }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={this.state.showComponent ? 'Hide Component One' : 'Show Component One'}
          onPress={this.toggleComponent}
        />
        {this.state.showComponent && <ComponentOne savedText={this.props.savedText} />}
        <Text style={styles.text}>Stored Text: {this.props.savedText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

const mapStateToProps = (state) => ({
  savedText: state.text,
});

const mapDispatchToProps = {
  setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

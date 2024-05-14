import React, {Component, forwardRef} from 'react';
import {View, Text} from 'react-native';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  changeText = newText => {
    this.setState({text: newText});
  };

  render() {
    // Use the forwarded ref in your component
    const {forwardedRef, ...rest} = this.props;

    return (
      <View {...rest} ref={forwardedRef}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

// Note the second param ref forwarded as the first one.
export default forwardRef((props, ref) => (
  <MyClassComponent {...props} forwardedRef={ref} />
));

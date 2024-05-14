import React, { forwardRef, useState, useImperativeHandle } from "react";
import { View, Text } from "react-native";

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('Hello World');
  
  useImperativeHandle(ref, () => ({
    changeText: (newText) => setText(newText)
  }));

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
});

export default MyFunctionPage;
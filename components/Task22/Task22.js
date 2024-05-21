import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

/*
====================

Here the Parent is MyFunctionPage so you should use it in app.tsx
==================
*/

const Task22 = props => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Task22;

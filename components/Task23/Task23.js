import React, {Component} from 'react';
import {View, Text} from 'react-native';

/*
====================

Here the Parent is MyClassComponent so you should use it in app.tsx
==================
*/
const Task23 = props => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Task23;

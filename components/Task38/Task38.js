import React from 'react';
import {View} from 'react-native';
import {TextProvider} from './TextContext';
import Task38FunctionComponent from '../Task38FunctionComponent/Task38FunctionComponent';

const Task38 = () => {
  return (
    <TextProvider>
      <View style={{padding: 20}}>
        <Task38FunctionComponent />
        <Task38FunctionComponent />
        <Task38FunctionComponent />
        <Task38FunctionComponent />
      </View>
    </TextProvider>
  );
};

export default Task38;

/*
==========================================
Task 21 MyFunctionPage
==========================================
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('MyFunctionPage mounted');
    return () => {
      console.log('MyFunctionPage unmounted');
    };
  }, []);

  return (
    <View>
      <Text>MyFunctionPage</Text>
    </View>
  );
};

export default MyFunctionPage;

const styles = StyleSheet.create({});

*/
/*
==========================================
Task 22 MyFunctionPage
==========================================
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Task22 from '../Task22/Task22';
const MyFunctionPage = () => {
  const [text, setText] = useState('Hello World');
  useEffect(() => {
    console.log('MyFunctionPage mounted');
    return () => {
      console.log('MyFunctionPage unmounted');
    };
  }, []);

  return (
    <View>
      <TextInput placeholder="MyFunctionPage" onChangeText={setText}/>
      <Task22 text={text} />
    </View>
  );
};

export default MyFunctionPage;

const styles = StyleSheet.create({});
*/
/*
==========================================
Task 24 MyFunctionPage
==========================================
import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react';
import {View, Text} from 'react-native';

const MyFunctionPage = forwardRef((props, ref) => {
  const [text, setText] = useState('Hello World');

  useImperativeHandle(ref, () => ({
    changeText: newText => setText(newText),
  }));
  useEffect(() => {
    console.log('MyFunctionPage mounted');
    return () => {
      console.log('MyFunctionPage unmounted');
    };
  }, []);
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
});

export default MyFunctionPage;
*/

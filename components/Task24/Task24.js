import React, {useRef} from 'react';
import {TextInput, View} from 'react-native';
import MyFunctionPage from '../MyFunctionPage';

const Task24 = () => {
  const MyFunctionPageRef = useRef();

  const handleTextChange = newText => {
    MyFunctionPageRef.current.changeText(newText);
  };
  return (
    <View>
      <TextInput onChangeText={handleTextChange}></TextInput>
      <MyFunctionPage ref={MyFunctionPageRef} />
    </View>
  );
};
export default Task24;

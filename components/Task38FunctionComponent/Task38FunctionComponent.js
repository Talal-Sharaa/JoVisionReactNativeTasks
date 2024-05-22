import React, {useContext} from 'react';
import {View, TextInput} from 'react-native';
import Task38ClassComponent from '../Task38ClassComponent/Task38ClassComponent';
import TextContext from '../Task38/TextContext';

const Task38FunctionComponent = () => {
  const {text, setText} = useContext(TextContext);

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
      />
      <Task38ClassComponent />
    </View>
  );
};

export default Task38FunctionComponent;

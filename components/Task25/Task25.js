import React, {useRef} from 'react';
import {View} from 'react-native';
import MyClassComponent from '../MyClassComponent';
import {TextInput} from 'react-native';
import {useState} from 'react';
const Task25 = () => {
  const [inputText, setInputText] = useState('');
  const MyClassComponentRef = useRef(null);

  const handleInputChanges = newText => {
    setInputText(newText);
    MyClassComponentRef.current.setNewText(newText);
  };
  return (
    <View>
      <TextInput
        placeholder="Enter new text"
        onChangeText={handleInputChanges}
      />
      <MyClassComponent ref={MyClassComponentRef} />
    </View>
  );
};

export default Task25;

import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setText } from './store';

const ComponentOne = ({ savedText }) => {
  const [text, setTextState] = useState(savedText);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setText(text));
    };
  }, [text, dispatch]);

  const handleChangeText = (newText) => {
    setTextState(newText);
    dispatch(setText(newText)); // Update the Redux store immediately
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleChangeText}
        placeholder="Type something..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default ComponentOne;

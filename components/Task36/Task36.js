import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';

const Task36 = () => {
  const [words, setWords] = React.useState([]);
  const fetchRandomWords = async () => {
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?number=100',
    );
    const data = await response.json();
    setWords(data);
  };
  useEffect(() => {
    fetchRandomWords();
  }, []);
  return (
    <View>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {words.map((word, index) => (
          <Text
            key={index}
            style={{
              backgroundColor: '#A9C79C',
              margin: 10,
              padding: 10,
              width: '100%',
              textAlign: 'center',
            }}>
            {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Task36;

const styles = StyleSheet.create({});

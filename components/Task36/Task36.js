import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';

const Task36 = () => {
  const [words, setWords] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const {width, height} = useWindowDimensions();
  const fetchRandomWords = async () => {
    console.log('Fetching words...');
    try {
      const response = await fetch(
        'https://random-word-api.herokuapp.com/word?number=100',
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWords(data);
      console.log('Words fetched successfully');
    } catch (error) {
      console.error('Error fetching words: ', error);
    }
  };

  useEffect(() => {
    fetchRandomWords();
  }, []);

  const onRefresh = useCallback(() => {
    console.log('Refreshing...');
    setRefreshing(true);
    fetchRandomWords().finally(() => {
      console.log('Refreshed!');
      setRefreshing(false);
    });
  }, []);

  return (
    <SafeAreaView style={{...styles.container, width: width, height: height}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {words.length === 0 ? (
          <Text style={styles.noWords}>No words available</Text>
        ) : (
          words.map((word, index) => (
            <Text key={index} style={styles.word}>
              {word}
            </Text>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 20,
    flexGrow: 1, // Ensures the content is scrollable
  },
  noWords: {
    textAlign: 'center',
    marginTop: 20,
  },
  word: {
    backgroundColor: '#A9C79C',
    margin: 10,
    padding: 10,
    width: '90%',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default Task36;

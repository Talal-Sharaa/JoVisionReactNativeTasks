import React, {useState} from 'react';
import {View, Image, Button, FlatList, Pressable, Alert} from 'react-native';

const Task28 = () => {
  const [catsImages, setCatsImages] = useState([]);

  const fetchcats = async () => {
    try {
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      );
      const data = await response.json();
      setCatsImages(data.map(cat => ({uri: cat.url, key: cat.id})));
    } catch (error) {
      console.error(error);
    }
  };

  const showIDs = item => {
    Alert.alert('Image ID', item.key);
  };

  return (
    <View>
      <Button title="Load Image" onPress={fetchcats} />
      <FlatList
        data={catsImages}
        renderItem={({item}) => (
          <Pressable onPress={() => showIDs(item)}>
            <Image source={{uri: item.uri}} style={{width: 100, height: 100}} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Task28;

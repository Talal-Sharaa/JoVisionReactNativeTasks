import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  Modal,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Task28 = () => {
  const [images, setImages] = useState([]);
  const {width, height} = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const flatListRef = React.useRef();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        setImages(json);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const scrollToIndex = () => {
    setVisible(false);
    if (index < images.length) {
      flatListRef.current.scrollToIndex({animated: true, index: index});
    }
  };
  return (
    <View style={{width: width, height: height}}>
      <Button title="Scroll to index" onPress={() => setVisible(true)} />
      <Button
        title="Change direction"
        onPress={() => setHorizontal(!horizontal)}
      />
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Button title="Scroll to index" onPress={scrollToIndex} />
            <TextInput
              placeholder="Enter index"
              onChangeText={text => setIndex(parseInt(text) - 1)}
              style={{borderWidth: 1, width: 100, color: 'black'}}
            />
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={images}
        ref={flatListRef}
        horizontal={horizontal}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Pressable onPress={() => Alert.alert(item.id.toString())}>
              <Image source={{uri: item.url}} style={styles.image} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Task28;

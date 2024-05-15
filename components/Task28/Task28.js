import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  Pressable,
  Button,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';

const Task28 = () => {
  const FlatListRef = useRef();
  const [images, setImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setImages(json))
      .catch(error => console.error(error));
  }, []);

  const viewImages = ({item}) => (
    <View>
      <Pressable onPress={() => Alert.alert('You selected image: ' + item.id)}>
        <Image
          source={{uri: item.url}}
          style={{width: 100, height: 100}}></Image>
      </Pressable>
    </View>
  );

  const scrollToIndex = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          ref={FlatListRef}
          horizontal
          data={images}
          renderItem={viewImages}></FlatList>
        <Button title="Scroll to Index" onPress={scrollToIndex}></Button>
      </View>
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter image index (starts at 0):"
            value={inputIndex}
            onChangeText={setInputIndex}
            keyboardType="numeric"
          />
          <Button
            title="Scroll"
            onPress={() => {
              const index = parseInt(inputIndex, 10) - 1;
              if (!isNaN(index) && index >= 0 && index < images.length) {
                FlatListRef.current.scrollToIndex({animated: true, index});
              } else {
                Alert.alert('Invalid Index', 'Please enter a valid index.');
              }
              setIsModalVisible(false);
            }}
          />
          <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default Task28;
